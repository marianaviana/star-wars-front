import styled from 'styled-components'

import { colors } from '../../utils/variables'
import { P, H1 } from './texts'
import { Button } from './buttons'
import { Section, Container } from './gridSystem'

export const SectionItem = styled(Section)`
  margin-top: 38px;
`

export const ContainerItem = styled(Container)`
  background-color: ${colors.mercury};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  max-width: 100%;
  padding: 14px;
  width: 729px;
`

export const Title = styled(H1)`
  color: ${colors.shark};
  font-size: 13px;
`

export const BoxDescription = styled.div`
  margin-left: 14px;
`

export const Box = styled.div`
  display: flex;
  width: 100%;
`

export const BoxColumn = styled.div`
  ${({ full }) => full && 'text-align: center; width: 100%;'};
`


export const Description = styled(P)`
  color: ${colors.shark};
`

export const Btn = styled(Button)`
  margin-top: 10px;
`

export const List = styled.ul`
  font-size: 12px;

  ${({ noSpaces }) => noSpaces && 'padding: 0;'};
`

export const Item = styled.li`
  color: ${colors.shark};

  ${({ noDots }) => noDots && 'list-style: none;'};
`