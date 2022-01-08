json.extract! post, :id, :title, :body, :media, :link, :poster_id, :community_id #, :vote_count
json.comments_count post.comments.length
json.poster post.poster.username
json.community post.community.sub
json.post_date "#{post.created_at.strftime('%-m')}/#{post.created_at.strftime('%-d')}/#{post.created_at.strftime('%Y')} at #{post.created_at.strftime('%l')}:#{post.created_at.strftime('%M')}#{post.created_at.strftime('%P')}"