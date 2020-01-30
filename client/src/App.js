import React from 'react';
import './App.css';
import Store from './store/store'
import WebsiteBod from "./pages/WebsiteBod"
import Questions from "./components/Questions"
import Test from "./components/Test"
import Feedback from './components/Feedback';
function App() {

  return (
    <div id = "ima div" style = {{marginTop:0}}>
      
    <Store>
    <Feedback/>
    <WebsiteBod/>
    
      </Store>
      </div>
  );
}

export default App;
