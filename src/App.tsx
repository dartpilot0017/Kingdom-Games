import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutUsPage'
import FooterSection from './components/Footer'
import ContactPage from './pages/ContactPage'
import GamesPage from './pages/GamesPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='h-screen bg-shadowGray'>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
      <FooterSection />
      </div>
  )
}

export default App
