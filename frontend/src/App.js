import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <HomeScreen/>
    </Router>
  );
}

export default App;