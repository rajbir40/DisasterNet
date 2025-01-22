import CarbonCalculator from './User Tools/carbonCalculator'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
     <Routes>
      <Route path="/" element={<CarbonCalculator />} />
     </Routes>
    </Router>
  )
}

export default App
