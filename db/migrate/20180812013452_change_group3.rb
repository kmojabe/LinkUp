class ChangeGroup3 < ActiveRecord::Migration[5.1]
  def change
    add_column :groups, :img_url, :string
    change_column_null(:groups, :bio, false )
  end
end
