import { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import * as B from '../../components/common/buttons'
import * as P from '../../components/common/photo'
import * as S from '../../components/common/bigCards'
import Hero from '../../components/layouts/Hero'
import Loading from '../../components/layouts/Loading'

const api = 'https://swapi.dev/api/';

const CurrentFilm = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [episode, setEpisode] = useState([])
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchEpisode = async () => {
      const respFilms = await fetch(`${api}films/${id}?format=json`);
      const dataFilms =  await respFilms.json();
      setEpisode(dataFilms);
      if (loading) {
        fetchCharacters(dataFilms);
      }
    }

    const fetchCharacters = async (dataFilms) => {
      const listPeople = await Promise.all(
        dataFilms.characters.map((character) => getItem(character))
      )

      setLoading(false);
      setCharacters(listPeople);
    }

    const getItem = async (apiUrl) => {
      const respItem = await fetch(`${apiUrl}?format=json`);
      const data = respItem.json();
      return data
    }

    fetchEpisode();
  }, [id, characters, loading])

  return (
    <>
      <Hero />
      { loading
        ? (
          <Loading/>
        ) : (
        <S.SectionItem>
          <S.ContainerItem>
            <S.Box>
              <P.Photo
                src={`/assets/images/episode/${episode.episode_id}.webp`}
                alt={episode.title}
              />
              <S.BoxDescription>
              <S.Title>{episode.title}</S.Title>
              <S.Description>{episode.opening_crawl}</S.Description>
              <S.List>
                <S.Item>Director: {episode.director}</S.Item>
                <S.Item>Producer {episode.producer}</S.Item>
                <S.Item>Producer {episode.producer}</S.Item>
              </S.List>
              </S.BoxDescription>
            </S.Box>
            <S.Box>
              <S.BoxColumn full>
                <S.Title>Characters {characters.length}</S.Title>
                <S.List noSpaces>
                  {characters && characters.map((character, i) => (
                    <S.Item noDots key={i} >{
                      <Link to={`/people/${character.url.toString().replace(/[^0-9]/g,'')}/${character.name}`}>
                        <B.ButtonGroup><S.Btn medium>{character.name}</S.Btn></B.ButtonGroup>
                      </Link>}
                    </S.Item>
                  ))}
                </S.List>
              </S.BoxColumn>
            </S.Box>
          </S.ContainerItem>
        </S.SectionItem>
        )
        }
    </>
  )
}

export default CurrentFilm;