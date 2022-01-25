json.extract! user, :id, :username, :color
json.karma user.post_karma.length + user.comment_karma.length - user.posts.length - user.comments.length