class AddColumnToCommunities < ActiveRecord::Migration[5.2]
  def change
    add_column :communities, :creatorId, :integer, null: false
    add_index :communities, :creatorId
  end
end
