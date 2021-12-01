class Community < ApplicationRecord
  
  VALID_CHARS = []

  validates :sub, :creator_id, presence: true
  validates :sub, uniqueness: true
  validates :sub, length: { minimum: 3, maximum: 21 }, format: { with: /\w/, message: 'only allows letters and numbers' }

  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :User

  # has_many :follows,
  #   primary_key: :sub,
  #   foreign_key: :community_name,
  #   class_name: :Follow

  has_many :follows,
    primary_key: :id,
    foreign_key: :community_id,
    class_name: :Follow

  has_many :followers,
    through: :follows,
    source: :user

  has_many :posts,
    primary_key: :id,
    foreign_key: :community_id,
    class_name: :Post

end