class Api::EventsController < ApplicationController
  def show
    @event = Event.find(params[:id])
    if @event
      render "api/events/show"
    else
      render json: ["Event doesn't exist"]
    end
  end
end
