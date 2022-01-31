import * as S from './styles'
import * as L from '../../common/logo'
import { Link } from 'react-router-dom';

const Hero = () => {

  return (
    <S.Header>
      <Link to='/'>
      <L.Logo small src="/assets/images/logo.png" alt="Logo Star Wars" />
      </Link>
    </S.Header>
  )
}

export default Hero;