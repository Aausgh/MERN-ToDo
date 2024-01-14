import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'

function App() {

  return (
    <main className='bg-gradient-to-t from-gray-700 via-gray-900 to-black'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
