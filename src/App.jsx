import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favorite from './pages/Favorites'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <div>
        <NavBar/>
      </div>
      <main className='main-content'>
        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/favorites' element ={<Favorite/>}/>
        </Routes>
      </main>
    </>
  )
}
export default App
