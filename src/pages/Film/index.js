import { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import * as B from '../../components/common/buttons'
import * as P from '../../components/common/photo'
import * as S from '../../components/common/bigCards'
import Hero from '../../components/layouts/Hero'

const api = 'https://swapi.dev/api/';

const CurrentFilm = () => {
  const { id } = useParams();
  const [loadding, setLoading] = useState(true);
  const [episode, setEpisode] = useState([])
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchEpisode = async () => {
        const respFilms = await fetch(`${api}films/${id}?format=json`);
        const dataFilms =  await respFilms.json();
        setEpisode(dataFilms);
        if (loadding) {
          fetchCharacters(dataFilms);
        }
    }

    const fetchCharacters = async (dataFilms) => {
      const people = await dataFilms.characters.map((character) => (
        getItem('/people', character.toString().replace(/[^0-9]/g,''))
      ))
      setLoading(false);
      setCharacters(people)
    }

    const getItem = async (type, currentId) => {
      const respItem = await fetch(`${api}${type}/${currentId}?format=json`);
      const data = await respItem.json();
      console.log(data)
      return data
    }

    fetchEpisode();
  }, [id, characters, loadding])


  const renderPeople = () => {
    return (
      <S.List>
      {characters && characters.map((character, i) => (
        <S.Item noDots key={i} >{
          <Link to={`/people/${character.toString().replace(/[^0-9]/g,'')}`}>
            <B.ButtonGroup><B.Button medium>{character.name}</B.Button></B.ButtonGroup>
          </Link>}
        </S.Item>
      ))}
    </S.List>
    )
  }

  return (
    <>
    <Hero />
      { loadding
        ? (
          <h1>Loadding...</h1>
        ) : (
        <S.SectionItem>
          <S.ContainerItem>
            <P.Photo
                src={`/assets/images/episode/${episode.episode_id}.png`}
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
              <S.Title>Characters</S.Title>
              {renderPeople()}
            </S.BoxDescription>
          </S.ContainerItem>
        </S.SectionItem>
        )
        }
    </>
  )
}

export default CurrentFilm;