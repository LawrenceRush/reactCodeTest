import React from 'react';
import './App.css';
import Store from './store/store'
import WebsiteBod from "./pages/WebsiteBod"
import Questions from "./components/Questions"
import Test from "./components/Test"
function App() {

  return (
    <Store>
      {/* <Test/> */}
    <WebsiteBod/>
    
      </Store>

  );
}

export default App;
