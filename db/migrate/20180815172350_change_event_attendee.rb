class ChangeEventAttendee < ActiveRecord::Migration[5.1]
  def up
    execute 'ALTER TABLE event_attendees ALTER COLUMN user_id TYPE integer USING (user_id::integer)'
    execute 'ALTER TABLE event_attendees ALTER COLUMN event_id TYPE integer USING (event_id::integer)'
  end

  def down
    execute 'ALTER TABLE event_attendees ALTER COLUMN user_id TYPE text USING (user_id::text)'
    execute 'ALTER TABLE event_attendees ALTER COLUMN event_id TYPE text USING (event_id::text)'
  end
end
