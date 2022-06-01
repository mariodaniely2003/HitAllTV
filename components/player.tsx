import { PrismaClient } from '@prisma/client';
import Player from 'griffith'
import { useState } from 'react';

const prisma = new PrismaClient();
export async function getServerSideProps() {
  const Movie_url = await prisma.movies.findMany();
  return {
    props: {
      movie_url: Movie_url
    }
  }
}

interface movie_url {
  Url: string
}

function PlayerMovie({ movie_url }: movie_url) {
  const [url, setUrl] = useState(movie_url)
  const sources = {
    hd: {
      play_url: url,
    },
    sd: {
      play_url: url,
    },
  }
  return (
    <div className="w-full h-full absolute top-0 left-0">
      <Player id="" sources={sources} />
    </div>
  )
}

export default PlayerMovie
