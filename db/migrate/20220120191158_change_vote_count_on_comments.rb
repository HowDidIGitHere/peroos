class ChangeVoteCountOnComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :upvotes, :integer
    add_column :comments, :downvotes, :integer
  end
end
