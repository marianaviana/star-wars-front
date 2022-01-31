import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react';

import * as S from './styles'
import Hero from '../../components/layouts/Hero'

const api = 'https://swapi.dev/api/';

const List = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const resp = await fetch(`${api}films/?format=json`);
      const data =  await resp.json();
      setEpisodes(data.results);
    }

    fetchEpisodes();
  }, [])

  const handleUrl = (currentApiUrl, title) => {
    const id = currentApiUrl.replace(/[^0-9]/g,'')
    return `/film/${id}/${title}`

  }

  return (
  <>
    <Hero />
    <S.SectionList>
      <S.ContainerList>
        <S.Cards>
          <S.ListCard>
            {episodes.map((episode) => (
              <Link to={handleUrl(episode.url, episode.title)} key={episode.episode_id}>
                <S.ItemCard>
                  <img
                    src={`/assets/images/episode/${episode.episode_id}.png`}
                    alt={episode.title}
                  />
                  <S.TitleButton
                    medium
                  >
                    {episode.title}
                  </S.TitleButton>
                </S.ItemCard>
              </Link>
            ))}
          </S.ListCard>
        </S.Cards>
      </S.ContainerList>
    </S.SectionList>
  </>
  )
}

export default List;