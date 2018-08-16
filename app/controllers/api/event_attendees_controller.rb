class Api::EventAttendeesController < ApplicationController
  def create
    @event_attendee = EventAttendee.new()
    @event_attendee.event_id = params[:event_attendee][:event_id]
    @event_attendee.user_id = current_user.id;
    if logged_in? && @event_attendee.save
      @event = Event.find_by(id: params[:event_attendee][:event_id])
      @user = current_user
      render "api/event_attendees/show"
    else
      render json: @event_attendee.errors.full_messages, status: 422
    end
  end

  def destroy
    @event_attendee = EventAttendee.where(user_id: current_user.id, event_id: params[:id])
    if @event_attendee.destroy_all
      @event = Event.find_by(id: params[:id])
      @user = current_user
      render "api/event_attendees/show"
    else
      render json: ["Error unattending event"], status: 422
    end
  end

  def index
    @event_attendees = EventAttendee.all
    if @event_attendees
      render "api/event_attendees/index"
    else
      render json: ["There are no event attendees"], status: 422
    end
  end
end
