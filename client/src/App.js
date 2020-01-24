import React from 'react';
import './App.css';
import Store from './store/store'
import WebsiteBod from "./pages/WebsiteBod"
import Questions from "./components/Questions"
import Test from "./components/Test"
function App() {

  return (
    <div style = {{position:"relative"}}>
      
    <Store>
    
    <WebsiteBod/>
    
      </Store>
      </div>
  );
}

export default App;
