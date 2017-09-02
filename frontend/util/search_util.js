export const fetchResults = (search) => {
  return $.ajax({
    url: `api/search/?query=${search}`,
    method: 'GET',
  });
};
