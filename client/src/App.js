import React from 'react';
import './App.css';
import Store from './store/store'
import WebsiteBod from "./pages/WebsiteBod"
import Questions from "./components/Questions"
function App() {

  return (
    <Store>
    <WebsiteBod/>
    
      </Store>

  );
}

export default App;
