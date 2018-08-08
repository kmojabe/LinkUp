class ChangeUsers2 < ActiveRecord::Migration[5.1]
  def change
    change_column_null(:users, :location, false )
    add_index :users, :email
  end
end
