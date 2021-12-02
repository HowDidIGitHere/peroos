json.extract! comment, :id, :content, :commenter_id, :post_id, :parent_comment_id
json.commenter comment.commenter.username
json.comment_date "#{post.created_at.strftime('%-m')}/#{post.created_at.strftime('%-d')}/#{post.created_at.strftime('%Y')} at #{post.created_at.strftime('%l')}:#{post.created_at.strftime('%M')}#{post.created_at.strftime('%P')}"