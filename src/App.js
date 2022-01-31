import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


import { GlobalStyle} from './utils/globalStyle'

import { Navigate } from 'react-router-dom'
import { useContext } from 'react'

import Character from './pages/Character'
import Characters from './pages/Characters'
import CurrentFilm from './pages/Film'
import List from './pages/Films'
import Planet from './pages/Planet'
import Planets from './pages/Planets'
import StoreContext from './components/store/Context'
import StoreProvider from './components/store/Provider'
import UserLogin from './pages/Login'

const PrivateRoute = ({ children }) => {
  const { token } = useContext(StoreContext)
  return token ? children : <Navigate to="/login" />;
}


const App = () => {

  return (
    <>
    <GlobalStyle />
    <Router>
      <StoreProvider>
        <Routes>
          <Route path="/" element={<PrivateRoute><List /></PrivateRoute>} />
          <Route path="/film/:id/*" element={<PrivateRoute><CurrentFilm /></PrivateRoute>}/>
          <Route path="/login" element={<UserLogin/>} />
          <Route path="/people/:id/*" element={<PrivateRoute><Character /></PrivateRoute>}/>
          <Route path="/people/" element={<PrivateRoute><Characters /></PrivateRoute>}/>
          <Route path="/planet/:id/*" element={<PrivateRoute><Planet /></PrivateRoute>}/>
          <Route path="/planets/" element={<PrivateRoute><Planets /></PrivateRoute>}/>
          <Router path="*" element={<h1>Página não encontrada :(</h1>} />
        </Routes>
      </StoreProvider>
    </Router>
    </>
  );
}

export default App;
