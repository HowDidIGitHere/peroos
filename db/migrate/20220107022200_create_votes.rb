class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.boolean :upvote, null: false
      t.integer :user_id, null: false
      t.integer :parent_id, null: false
      t.string :parent_type, null: false

      t.timestamps
    end

    add_index :votes, :user_id
    add_index :votes, :parent_id
  end
end
