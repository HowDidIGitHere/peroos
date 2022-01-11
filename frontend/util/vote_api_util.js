export const vote = vote => (
  $.ajax({
    method: 'POST',
    url: '/api/votes',
    data: { vote }
  })
);

export const removeVote = vote => (
  $.ajax({
    method: 'DELETE',
    url: `/api/votes/${vote.id}`,
    data: { vote }
  })
);