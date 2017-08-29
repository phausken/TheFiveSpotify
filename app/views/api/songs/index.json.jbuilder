@songs.each do |song|
  json.set!(song.id) do
    json.extract! song, :id, :title, :artist, :url, :status
  end
end
