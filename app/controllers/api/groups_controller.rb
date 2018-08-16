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
    if location
      @groups = (Group.in_town?(location))
    elsif description
      @groups = (Group.filter_name(description))
      @groups = (@groups + Group.filter_description(description)).uniq
    elsif params[:all]
      @groups = Group.all
    end
    # later put search functionality in here
    render "api/groups/index"
  end

  private
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
