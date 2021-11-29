class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.text :body
      t.string :media
      t.string :link
      t.integer :poster_id, null: false
      t.integer :community_id, null: false

      t.timestamps
    end

    add_index :posts, :poster_id
    add_index :posts, :community_id
  end
end
