import Login from './User Tools/Login/Login';
import Signup from './User Tools/Signup';
import UserProfile from './User Tools/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home'
import News from './News/news'

function App() {

  return (
    <Router>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/news" element={<News/>} />
     </Routes>
    </Router>
}

export default App
