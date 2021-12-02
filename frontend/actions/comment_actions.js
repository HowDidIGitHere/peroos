import * as CommentAPIutil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

// actions
export const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const receiveErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

// thunk action creators
export const getAllComments = (postId, page) => dispatch => (
  CommentAPIutil.getAllComments(postId, page)
    .then(comments => dispatch(receiveAllComments(comments)))
    .fail(errors => dispatch(receiveErrors(errors)))
);

export const createComment = comment => dispatch => (
  CommentAPIutil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
    .fail(errors => dispatch(receiveErrors(errors)))
);

export const editComment = comment => dispatch => (
  CommentAPIutil.editComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
    .fail(errors => dispatch(receiveErrors(errors)))
);

export const deleteComment = commentId => dispatch => (
  CommentAPIutil.deleteComment(commentId)
    .then(commentId => dispatch(removeComment(commentId)))
);