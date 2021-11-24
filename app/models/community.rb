class Community < ApplicationRecord
  
  validates :sub, :about, :creator_id, presence: true
  validates :creator_id, uniqueness: true
  validates :sub, length: { maximum: 21 }

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  # has_many :follows,
  #   foreign_key: :community_id,
  #   class_name: :Follow

  # has_many :followers,
  #   through: :follows,
  #   source: :users

end