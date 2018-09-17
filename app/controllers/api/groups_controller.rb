class Api::GroupsController < ApplicationController
  def create
    @group = Group.new(group_params)
    @group.moderator_id = current_user.id
    if logged_in? && @group.save
      render "api/groups/show"
    elsif logged_in?
      render json: @group.errors.full_messages, status: 422
    else
      render json: ["no user logged in"], status: 422
    end
  end

  def show
    @group = Group.find(params[:id])
     # @post = Post.find(params[:id])
    if @group
      render "api/groups/show"
    else
      render json: ["Group doesnt exit"], status: 404
    end
  end

  def index
    @groups=[]
    if location && description && (!location.empty?) && (!description.empty?)
      @groups = (Group.filter_name(description))
      @groups = (@groups + Group.filter_description(description)).uniq
      @groups = in_town?(@groups, location)
    elsif location && (!location.empty?)
      @groups = (Group.in_town?(location))
    elsif description && (!description.empty?)
      @groups = (Group.filter_name(description))
      @groups = (@groups + Group.filter_description(description)).uniq
    elsif params[:all]
      @groups = Group.all
    end
    render "api/groups/index"
  end

  private
  def in_town?(groups, town)
    groups.select{ |group| group.location.downcase == town.downcase }
  end
  def group_params
    params.require(:group).permit(:location, :group_name, :bio)
  end

  def location
    params[:location]
  end

  def description
    params[:description]
  end

  def name
    params[:name]
  end
end
