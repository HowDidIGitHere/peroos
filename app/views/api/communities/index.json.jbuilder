@communities.each do |community|
  json.set! community.sub do 
    json.partial! 'api/communities/community', community: community
  end
end