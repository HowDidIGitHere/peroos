@votes.each do |vote|
  voteParent = vote.parent_type + vote.parent_id.to_s
  json.set! voteParent do
    json.partial! 'api/votes/vote', vote: vote
  end
end