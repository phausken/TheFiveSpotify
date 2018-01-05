export const fetchSongs = () => {
  return $.ajax({
    url: "api/songs",
    method: "GET"
  });
};
