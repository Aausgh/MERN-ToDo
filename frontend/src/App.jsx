import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <main className=' bg-gray-900'>
      <Header />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
