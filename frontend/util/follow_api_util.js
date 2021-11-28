export const follow = follow => (
  $.ajax({
    method: 'POST',
    url: '/api/follows',
    data: { follow }
  })
);

export const unfollow = follow => (
  $.ajax({
    method: 'DELETE',
    url: `/api/follows/${follow.id}`,
    data: { follow }
  })
);