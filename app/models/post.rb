class Post < ApplicationRecord

  validates :title, :poster_id, :community_id, presence: true
  
  belongs_to :poster,
    primary_key: :id,
    foreign_key: :poster_id,
    class_name: :User

  belongs_to :community,
    primary_key: :id,
    foreign_key: :community_id,
    class_name: :Community

  

end
