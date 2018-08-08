class AddUserIdToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :user_id, :string
    add_column :users, :birthday, :date
    add_column :users, :gender, :string
  end
end
