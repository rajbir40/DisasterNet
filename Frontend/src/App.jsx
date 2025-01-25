import Login from './User Tools/Login/Login';
import Signup from './User Tools/Signup';
import UserProfile from './User Tools/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
     <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element={<UserProfile/>}/>
     </Routes>
    </Router>
  )
}

export default App
