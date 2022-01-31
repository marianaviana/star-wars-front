import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react';

import * as S from '../../components/common/privateStyle'
import Hero from '../../components/layouts/Hero'

const api = 'https://swapi.dev/api/';

const List = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const resp = await fetch(`${api}people/?format=json`);
      const data =  await resp.json();
      setPeople(data.results);
    }

    fetchPeople();
  }, [])

  const handleUrl = (currentApiUrl, title) => {
    const id = currentApiUrl.replace(/[^0-9]/g,'')
    return `/people/${id}/${title}`

  }

  return (
  <>
    <Hero />
    <S.SectionList>
      <S.ContainerList>
        <S.Cards>
          <S.ListCard>
            {people.map((person, i) => (
              <Link to={handleUrl(person.url, person.name)} key={i}>
                <S.ItemCard>
                  <S.TitleButton
                    medium
                  >
                    {person.name}
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