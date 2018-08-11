class CreateGroupMember < ActiveRecord::Migration[5.1]
  def change
    create_table :group_members do |t|
      t.integer   :group_id
      t.integer   :member_id
    end
  end
end
