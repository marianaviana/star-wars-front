import styled from 'styled-components'

import { colors } from '../../utils/variables'
import { P, H1 } from './texts'
import { Section, Container } from './gridSystem'

export const SectionItem = styled(Section)`
  margin-top: 38px;
`

export const ContainerItem = styled(Container)`
  background-color: ${colors.mercury};
  border-radius: 10px;
  display: flex;
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

export const Description = styled(P)`
  color: ${colors.shark};
`

export const List = styled.ul`
  font-size: 12px;
`

export const Item = styled.li`
  color: ${colors.shark};
  ${({ noDots }) => noDots && 'list-style: none;'};
`