@communities.each do |community|
  json.set! commuity.id do 
    json.extract! community, :sub
    json.follower_count community.followers.count
  end
end