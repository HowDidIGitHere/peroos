class RenameColumnToCommunities < ActiveRecord::Migration[5.2]
  def change
    remove_index :communities, name: "index_communities_on_creatorId"
    remove_column :communities, :creatorId

    add_column :communities, :creator_id, :integer, null: false
    add_index :communities, :creator_id
  end
end
