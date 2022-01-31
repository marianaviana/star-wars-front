import styled from 'styled-components'
import { colors } from '../../utils/variables'

import { Section, Container } from './gridSystem'
import { Button } from './buttons'

export const SectionList = styled(Section)`
  margin-top: 2px;
`

export const ContainerList = styled(Container)`
  width: 1024px;
`

export const Cards = styled.div`
  width: 100%;
`

export const ItemCard = styled.li`
  background-color: ${colors.wodsmoke};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 36px 39px;
  padding: 14px 17px 17px;
  text-align: center;
  width: 217px;
`

export const ListCard = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 0;
`

export const TitleButton = styled(Button)`
  margin-top: 15px;
`
