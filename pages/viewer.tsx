import { PrismaClient } from '@prisma/client'
import Player from 'griffith'
import { useRouter } from 'next/router'
import { stringify } from 'querystring'
import { useEffect, useState } from 'react'
import { Movie_Url } from '../typings'

function PlayerMovie() {
  const router = useRouter()
  const data = router.query
  const id = JSON.stringify(data)
  const url_t = JSON.parse(id)
  const sources = {
    fhd: {
      play_url: 'https://34.77.155.178/index.php/s/' + url_t.id + '/download',
    },
    hd: {
      play_url: 'https://34.77.155.178/index.php/s/' + url_t.id + '/download',
    },
    sd: {
      play_url: 'https://34.77.155.178/index.php/s/' + url_t.id + '/download',
    },
  }
  return (
    <div className="w-full h-full absolute top-0 left-0">
      <Player id="" sources={sources} />
    </div>
  )
}

export default PlayerMovie
