import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'

function App() {

  return (
    <main className=' bg-gray-900'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
