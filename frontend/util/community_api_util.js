export const getAllCommunities = () => (
  $.ajax({
    method: 'GET',
    url: '/api/communities'
  })
);

export const getFollowedCommunities = () => (
  $.ajax({
    method: 'GET',
    url: '/api/followed_communities'
  })
);

export const getCommunity = communityId => (
  $.ajax({
    method: 'GET',
    url: `/api/communities/${communityId}`
  })
);

export const createCommnity = community => (
  $.ajax({
    method: 'POST',
    url: '/api/communities',
    data: { community }
  })
);

export const editCommunity = community => (
  $.ajax({
    method: 'PATCH',
    url: `/api/communities/${community.sub}`,
    data: { community }
  })
);

export const deleteCommunity = communityId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/communities/${communityId}`
  })
);
