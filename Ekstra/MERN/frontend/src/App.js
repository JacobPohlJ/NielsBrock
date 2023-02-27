import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import Search from './pages/Search'
import Homepage from './pages/Homepage'
import Security from './pages/Security'
import Playlist from './pages/playlist'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/open/homepage' element={<Homepage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/search' element={<Search />} />
            <Route path='/security' element={<Security />} />
            <Route path='/playlist' element={<Playlist />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
