export const getAllPosts = community_id => (
  $.ajax({
    method: 'GET',
    url: `/api/communities/${community_id}/posts`
  })
);

export const getPost = postId => (
  $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}`
  })
);

export const createPost = post => (
  $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: { post }
  })
);

export const editPost = post => (
  $.ajax({
    method: 'PATCH',
    url: `/api/posts/${post.id}`,
    data: { post }
  })
);

export const deletePost = postId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/posts/${postId}`
  })
);