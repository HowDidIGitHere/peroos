export const getAllComments = (postId, page) => (
  $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}/comments`,
    data: { page }
  })
);

export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: '/api/comments/',
    data: { comment }
  })
);

export const editComment = comment => (
  $.ajax({
    method: 'PATCH',
    url: `/api/comments/${comment.id}`,
    data: { comment }
  })
);

export const deleteComment = commentId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`
  })
);