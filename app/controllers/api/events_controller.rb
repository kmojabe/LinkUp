class Api::EventsController < ApplicationController
  def show
    @event = Event.find(params[:id])
    if @event
      @group = Group.find_by(id: @event.group_id)
      render "api/events/show"
    else
      render json: ["Event doesn't exist"]
    end
  end
end
