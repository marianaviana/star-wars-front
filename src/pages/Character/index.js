import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

import * as B from '../../components/common/buttons'
import * as S from '../../components/common/bigCards'
import Hero from '../../components/layouts/Hero'

const api = 'https://swapi.dev/api/';

const Character = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchCharacter = async () => {
      const respCharacter = await fetch(`${api}people/${id}?format=json`);
      const dataCharacter =  await respCharacter.json();
      setCharacter(dataCharacter);
      if (loading) {
        fetchFilms(dataCharacter);
      }
    }

    const fetchFilms = async (dataCharacter) => {
      const listFilms = await Promise.all(
        dataCharacter.films.map((film) => getItem(film))
      )

      setLoading(false);
      setFilms(listFilms);
    }

    const getItem = async (apiUrl) => {
      const respItem = await fetch(`${apiUrl}?format=json`);
      const data = respItem.json();
      return data
    }

    fetchCharacter();
  }, [id])


  console.log(films)

  return (
    <>
    <Hero />
    <S.SectionItem>
      <S.ContainerItem>
        <S.Box>
          <S.BoxDescription>
            <S.Title>{character.name}</S.Title>
            <S.List>
              <S.Item>Height: {character.height}</S.Item>
              <S.Item>Mass: {character.mass}</S.Item>
              <S.Item>Hair color: {character.hair_color}</S.Item>
              <S.Item>Skin Color: {character.skin_color}</S.Item>
              <S.Item>Skin Color: {character.eye_color}</S.Item>
              <S.Item>Skin Color: {character.birth_year}</S.Item>
              <S.Item>Skin Color: {character.gender}</S.Item>
            </S.List>
          </S.BoxDescription>
        </S.Box>
            <S.Box>
              <S.BoxColumn full>
                <S.Title>Films ({films.length})</S.Title>
                <S.List noSpaces>
                  {films && films.map((film, i) => (
                    <S.Item noDots key={i} >{
                      <Link to={`/film/${film.url.toString().replace(/[^0-9]/g,'')}/${film.title}`}>
                        <B.ButtonGroup>
                          <S.Btn medium>{film.title}</S.Btn>
                        </B.ButtonGroup>
                      </Link>}
                    </S.Item>
                  ))}
                </S.List>
              </S.BoxColumn>
            </S.Box>
      </S.ContainerItem>
    </S.SectionItem>
    </>
  )
}

export default Character;