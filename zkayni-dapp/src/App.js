//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers';
//import Look from "./artifacts/contracts/Lock.sol/Lock.json";

function App() {
  return (
    <div className="App">
      <div className="App-Header"> 
        <div className='description'>
          <h1>ZKAyni MVP</h1>
          <h3>Full stack Dapp for PSE Core Program Hackathon</h3>
        </div>
        <div className="custom-buttons">
          <button style={{backgroudColor: "green"}}>Airdrop Manager</button>
          <button style={{backgroudColor: "red"}}>Beneficiary</button> 
        </div>
      </div>    
    </div>
  );
}

export default App;
