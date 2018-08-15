class Api::GroupMembersController < ApplicationController
  def create
    @group_member = GroupMember.new(group_member_params)
    @group_member.member_id = current_user.id;
    unless logged_in? && @group_member.save
      render json: @group_member.errors.full_messages, status: 422
    else
      @group = Group.find(group_member_params["group_id"])
      @user = current_user
      render "api/group_members/show"
    end
  end

  def destroy
    @group_member = GroupMember.where(group_id: params[:id], member_id: current_user.id)
    if ! @group_member.destroy_all
      render json: ["error unfollowing group"], status: 422
    else
      @group = Group.find_by(id: params[:id])
      @user = current_user
      render "api/group_members/show"
    end
  end

  private
  def group_member_params
    params.require(:group_member).permit(:group_id)
  end
end
