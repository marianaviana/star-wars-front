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
  const [planet, setPlanet] = useState([])
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchPlanet = async () => {
      const respPlanets = await fetch(`${api}planets/${id}?format=json`);
      const dataPlanets =  await respPlanets.json();
      setPlanet(dataPlanets);
      if (loading) {
        fetchFilms(dataPlanets);
      }
    }

    const fetchFilms = async (dataPlanets) => {
      const listFilms = await Promise.all(
        dataPlanets.films.map((film) => getItem(film))
      )

      setLoading(false);
      setFilms(listFilms);
    }

    const getItem = async (apiUrl) => {
      const respItem = await fetch(`${apiUrl}?format=json`);
      const data = respItem.json();
      return data
    }

    fetchPlanet();
  }, [id, films, loading])

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
              <S.BoxDescription>
              <S.Title>{planet.name}</S.Title>
              <S.List>
                <S.Item>Rotation Period: {planet.rotation_period}</S.Item>
                <S.Item>Orbital Period: {planet.orbital_period}</S.Item>
                <S.Item>Diameter {planet.diameter}</S.Item>
                <S.Item>Climate {planet.climate}</S.Item>
                <S.Item>Gravity {planet.gravity}</S.Item>
                <S.Item>Terrain {planet.terrain}</S.Item>
                <S.Item>Surface water {planet.surface_water}</S.Item>
                <S.Item>Population {planet.population}</S.Item>
              </S.List>
              </S.BoxDescription>
            </S.Box>
            <S.Box>
              <S.BoxColumn full>
                <S.Title>Films {films.length}</S.Title>
                <S.List noSpaces>
                  {films && films.map((film, i) => (
                    <S.Item noDots key={i} >{
                      <Link to={`/film/${film.url.toString().replace(/[^0-9]/g,'')}/${film.title}`}>
                        <B.ButtonGroup><S.Btn medium>{film.title}</S.Btn></B.ButtonGroup>
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