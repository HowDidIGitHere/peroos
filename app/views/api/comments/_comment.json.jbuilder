json.extract! comment, :id, :content, :commenter_id, :post_id, :parent_comment_id, :upvotes, :downvotes
# json.vote_count comment.votes.length - (comment.votes.select {|v| !v}.length * 2)
json.commenter comment.commenter.username
json.commenter_color comment.commenter.color
json.comment_date "#{comment.created_at.strftime('%-m')}/#{comment.created_at.strftime('%-d')}/#{comment.created_at.strftime('%Y')} at #{comment.created_at.strftime('%l')}:#{comment.created_at.strftime('%M')}#{comment.created_at.strftime('%P')} UTC"