class RemoveVoteCountOnPostsAndComments < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :vote_count, :integer
    remove_column :comments, :vote_count, :integer
  end
end
