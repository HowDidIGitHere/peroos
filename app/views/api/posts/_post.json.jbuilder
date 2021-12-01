json.extract! post, :id, :title, :body, :media, :link, :poster_id, :community_id, :created_at
json.poster post.poster.username
json.community post.community.sub