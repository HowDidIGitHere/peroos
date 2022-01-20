class ChangeVoteCountOnPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :upvotes, :integer
    add_column :posts, :downvotes, :integer
  end
end
