import { useState } from 'react';
import './App.css';
import ParentComponent from './components/Parent';
import ChildComponent from './components/Child';

function App() {
  const [colorcode, setColorCode] = useState('black');
  const handleGetTextValue = (color) => {
    setColorCode(color);
  }
  return (
    <div className="app-container">
        <ParentComponent colorcode={colorcode}>Color Shower</ParentComponent>
        <ChildComponent gettextvalue={handleGetTextValue} />
    </div>
  );
}

export default App;
