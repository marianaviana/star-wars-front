import { useContext } from 'react'

import * as S from './styles'
import * as L from '../../common/logo'
import { Link } from 'react-router-dom';
import StoreContext from '../../store/Context'

const Hero = () => {
  const { setToken } = useContext(StoreContext);

  const onLogoff = () => {
    setToken(null);
  }

  return (
    <>
      <S.Header>
        <Link to='/'>
        <L.Logo small src="/assets/images/logo.webp" alt="Logo Star Wars" />
        </Link>
      </S.Header>
      <S.Navbar>
        <Link to='/'>Films</Link>
        <S.Span>/</S.Span>
        <Link to='/people'>People</Link>
        <S.Span>/</S.Span>
        <Link to='/planets'>Planets</Link>
        <S.Span>/</S.Span>
        <S.Logoff onClick={onLogoff}>Sair</S.Logoff>

      </S.Navbar>
    </>
  )
}

export default Hero;