# @posts.each do |post|
#   json.set! post.id do
#     json.partial! 'api/posts/post', post: post
#   end
# end

json.array! @posts do |post|
  json.partial! 'api/posts/post', post: post
end