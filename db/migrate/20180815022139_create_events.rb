class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.text          :bio
      t.string        :location, null: false
      t.string        :event_name, null: false
      t.date          :event_date, null: false
      t.integer       :group_id, null: false
      t.string        :img_url
      t.timestamps
    end
  end
end
