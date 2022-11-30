import './App.css';
import Navigation from './components/navigation';
import CustomRoute from './route';

import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className='main'>
    <Router>
      <Navigation />
      <CustomRoute />
    </Router>
    </div>
  );
}

export default App;