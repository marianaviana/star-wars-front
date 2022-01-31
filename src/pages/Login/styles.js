import styled from 'styled-components'

import { colors, media } from '../../utils/variables'
import { Section, Container } from '../../components/common/gridSystem'
import { H2 } from '../../components/common/texts'

export const SectionLogin = styled(Section)`
  margin-top: 84px;
`

export const ContainerLogin = styled(Container)`
  width: 433px;

  @media (min-width: ${media.tablet}) {
    max-width: 100%;
  }
`

export const LoginHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 60px;
`

export const Subtitle = styled(H2)`
  margin: 0;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 544px;
`

export const Input = styled.input`
  border-radius: 10px;
  padding: 10px 15px;
  width: 100%;
  border: 1px solid ${colors.white};
  outline: none;
  font-size: 19px;
  color: ${colors.white};
  background-color: ${colors.shark};
  font-weight: bold;
  margin-bottom: 20px;
`