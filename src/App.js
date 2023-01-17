import logo from './logo.svg';
import './App.css';
import { NavMenu } from './components/NavMenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ATM } from './components/ATM';
import { English } from './components/English';
import { Polish } from './components/Polish';
import { InsertPIN } from './components/InsertPIN';

function App() {
  return (
    <Router>
    <div className="App">

      <Routes>

        <Route path='/' element={<ATM />} />

        <Route path='/english' element={<English />} />
        <Route path='/polish' element={<Polish />} />

        <Route path='/pin' element={<InsertPIN />} />

      </Routes>

    </div>
    </Router>
  );
}

export default App;
