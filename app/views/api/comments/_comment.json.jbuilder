json.extract! comment, :id, :content, :commenter_id, :post_id, :parent_comment_id #, :vote_count
json.commenter comment.commenter.username
json.comment_date "#{comment.created_at.strftime('%-m')}/#{comment.created_at.strftime('%-d')}/#{comment.created_at.strftime('%Y')} at #{comment.created_at.strftime('%l')}:#{comment.created_at.strftime('%M')}#{comment.created_at.strftime('%P')} UTC"