import { Routes, Route } from 'react-router';
import './App.css'
import { Header } from './components/Header.jsx'
import { HomePage } from './pages/HomePage.jsx';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route index element={<HomePage />} /> 
    </Routes>
  );
}

export default App
