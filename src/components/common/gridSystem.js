import styled from 'styled-components'

import { media } from '../../utils/variables'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Container = styled.div`
  margin-left: 3.5rem;
  margin-right: 3.5rem;
  position: relative;
  z-index: 99;

  @media (max-width: ${media.tablet}) {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }

  @media (max-width: ${media.mobile}) {
    margin-left: 1.75rem;
    margin-right: 1.75rem;
  }

  @media (min-width: ${media.desktop}) {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
`
