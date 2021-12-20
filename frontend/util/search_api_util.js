export const getSearchResults = query => (
  $.ajax({
    method: 'GET',
    url: '/api/search',
    data: { query }
  })
);