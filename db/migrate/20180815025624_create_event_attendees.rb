class CreateEventAttendees < ActiveRecord::Migration[5.1]
  def change
    create_table :event_attendees do |t|
      t.text    :user_id, null: false
      t.text    :event_id, null: false
      t.timestamps
    end
  end
end
