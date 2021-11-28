class Follow < ApplicationRecord

  validates :user_id, :community_id, presence: true

  belongs_to :community,
    primary_key: :id,
    foreign_key: :community_id,
    class_name: :Community

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end
