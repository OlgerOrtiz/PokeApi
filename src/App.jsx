
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PokeInfo from './pages/PokeInfo'

function App() {

  return (
    
      <>
      <article className='App'>
        <Routes>
          <Route path='/' element={<Home/>} />
          
          <Route path='*' />

          <Route element={<ProtectedRoutes/>}>
            <Route path='/pokedex' element={<Pokedex/>} />
            <Route path='/pokedex/:name' element={<PokeInfo/>} />
          </Route>
        </Routes>
      </article>
      </>
    
  )
}

export default App
