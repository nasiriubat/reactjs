import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { Button } from 'semantic-ui-react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='menu'>
        <Link to='/'>
          <h2 className="main-header">React Crud Operations</h2>
        </Link>
        <div>
          <Link to='/create'>
            <Button>Create</Button>
          </Link>
        </div>
      </div>
      <div className="main">
        <div>
          <Routes>
            <Route exact path='/' element={<Read />} />
          </Routes>
        </div>
        <div>
          <Routes>
            <Route exact path='/create' element={<Create />} />
          </Routes>
        </div>
        <div style={{ marginTop: 20 }}>
          <Routes>
            <Route exact path='/read' element={<Read />} />
          </Routes>

        </div>
        <Routes>
          <Route path='/update' element={<Update />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;