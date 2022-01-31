import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import * as S from '../../components/common/bigCards'
import Hero from '../../components/layouts/Hero'

const api = 'https://swapi.dev/api/';

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const fetchCharacter = async () => {
      const resp = await fetch(`${api}people/${id}?format=json`);
      const data =  await resp.json();
      setCharacter(data);
    }
    fetchCharacter();
  }, [id])

  return (
    <>
    <Hero />
    <S.SectionItem>
      <S.ContainerItem>
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
              <S.Item>Skin Color: {character.homeworld}</S.Item>
          </S.List>
        </S.BoxDescription>
      </S.ContainerItem>
    </S.SectionItem>
    </>
  )
}

export default Character;