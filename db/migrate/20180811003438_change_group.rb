class ChangeGroup < ActiveRecord::Migration[5.1]
  def change
    add_column :groups, :bio, :text
  end
end
