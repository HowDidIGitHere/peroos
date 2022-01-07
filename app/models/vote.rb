class Vote < ApplicationRecord

  validates :upvote, :user_id, :parent_id, :parent_type, presence: true

  belongs_to :parent,
    polymorphic: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end
