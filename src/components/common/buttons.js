import styled from 'styled-components'

import { colors } from '../../utils/variables'

export const Button = styled.button`
  font-size: 19px;
  background-color: ${colors.ripeLemon};
  color: ${colors.shark};
  border: none;
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  font-weight: bold;

  ${({ medium }) => medium && 'font-size: 13px; padding: 14px;'};
`

export const ButtonGroup = styled.button`
  border: none;
  width: 100%;

  > :not(:first-child) {
    margin-top: 10px;
  }
`