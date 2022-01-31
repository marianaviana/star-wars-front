
import { Link, useNavigate } from 'react-router-dom'

import { useState, useContext } from 'react'

import * as B from '../../components/common/buttons'
import * as L from '../../components/common/logo'
import * as S from './styles'
import * as T from '../../components/common/texts'

import StoreContext from '../../components/store/Context'

const initialStates = () => {
  return {user: '', password: ''}
}

const login = ({user, password}) => {
  if (user === 'admin' && password === 'Admin123!') {
    return { token: 'token123456'}
  }
  return { error: 'Usuário ou senha invalido' }
}

const UserLogin = () => {
  const [values, setValues] = useState(initialStates);
  const { setToken } = useContext(StoreContext);
  const navigate = useNavigate()

  const onChange = (event) => {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const { token } = login(values)
    if (token) {
      setToken(token);
      navigate('/');
    }

    setValues(initialStates)
  }

  return (
    <S.SectionLogin>
      <S.ContainerLogin>
        <S.LoginHeader>
          <Link to="/">
            <L.Logo src="/assets/images/logo.webp" alt="Logo Star Wars" />
          </Link>
          <T.H1>Login</T.H1>
          <T.H2>Please enter your Login and Password</T.H2>
        </S.LoginHeader>
        <S.Form onSubmit={onSubmit}>
          <S.Input
            type="text"
            name="user"
            id="user"
            placeholder="Login"
            onChange={onChange}
            value={values.user}
          />
          <S.Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={onChange}
            value={values.password}
          />
          <B.Button type="submit">Login</B.Button>
        </S.Form>
      </S.ContainerLogin>
    </S.SectionLogin>
  );
};

export default UserLogin;