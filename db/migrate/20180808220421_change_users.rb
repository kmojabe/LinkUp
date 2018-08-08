class ChangeUsers < ActiveRecord::Migration[5.1]
  def change
    change_column_null(:users, :email, false )
  end
end
