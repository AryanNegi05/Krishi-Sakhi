import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import CropHealth from './pages/CropHealth'
import Recommendations from './pages/Recommendations'
import Chatbot from './pages/Chatbot'
import Market from './pages/Market'
import Weather from './pages/Weather'
import Community from './pages/Community'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/crop-health" element={<CropHealth />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/market" element={<Market />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App