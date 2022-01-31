import styled from 'styled-components'

import { colors } from '../../../utils/variables'
import { Button } from '../../common/buttons'

export const Header = styled.header`
  background-color: ${colors.wodsmoke};
  display: flex;
  justify-content: center;
  padding: 26px;
  width: 100%;
`

export const Navbar = styled.nav`
  background-color: ${colors.white};
  color: ${colors.shark};
  font-weight: bold;
  padding: 20px;
  text-align: center;
  width: 100%;
`

export const Span = styled.span`
  margin: 0 15px;
`

export const Logoff = styled(Button)`
  font-size: 10px;
  padding: 5px;
  max-width: 60px;
`