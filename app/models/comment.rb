class Comment < ApplicationRecord

  validates :content, :commenter_id, :post_id, presence: true

  belongs_to :commenter,
    primary_key: :id,
    foreign_key: :commenter_id,
    class_name: :User

  belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post

  # belongs_to :parent_comment,
  #   primary_key: :id,
  #   foreign_key: :parent_comment_id,
  #   class_name: :Comment

  has_many :votes,
    as: :parent
    
end
