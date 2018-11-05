export async function fetchTrackList() {
  const data = await import('./data/trackList.json');
  return data.tracks;
}
