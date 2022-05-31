import Player from 'griffith'
function player() {
  const sources = {
      //EXORCISMO OF FOD
    hd: {
      play_url: 'https://cloclo52.datacloudmail.ru/public/view/7YauPefSyMcYy3d3YseUVxmxiKgkecmSgnoZw7c1RTCVhBU4HX7jdQTbH74zVTcWUTSYys/no/REsnt5FGhKOwycOvEQFfHdtbGeWN2VF2K6tBjJg4.mp4',
    },
    sd: {
      play_url: 'https://cloclo52.datacloudmail.ru/public/view/7YauPefSyMcYy3d3YseUVxmxiKgkecmSgnoZw7c1RTCVhBU4HX7jdQTbH74zVTcWUTSYys/no/REsnt5FGhKOwycOvEQFfHdtbGeWN2VF2K6tBjJg4.mp4',
    },
  }
  return <Player id='teste' sources={sources} />
}

export default player
