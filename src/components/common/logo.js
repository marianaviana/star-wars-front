import styled from 'styled-components'

export const Logo = styled.img`
  width: 140px;

  ${({ small }) => small && 'width: 55px;'};
`
