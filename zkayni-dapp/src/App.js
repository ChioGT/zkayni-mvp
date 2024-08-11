//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers';
//import {BrowserRouter, Route, Link} from 'react-router-dom';
import Look from "./artifacts/contracts/Lock.sol/Lock.json";

const lookAddress= "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {
  return (
   
    <div className="App">
      <div className="App-Header"> 
        <div className='description'>
          <h1>ZKAyni MVP</h1>
          <h3>Full stack Dapp for PSE Core Program Hackathon</h3>
        </div>
        <div className="custom-buttons">
          <p>
            <button style={{backgroudColor: "green"}}>Airdrop Manager</button>
            <button style={{backgroudColor: "red"}}>Beneficiary</button> 
          </p>
       </div>
      </div>    
    </div>
  
    
  );
}

function Greeting() {
  return (
    <div>
      <h1>Greeting</h1>
      <p>Hello, World!</p>
    </div>
  );
}

function ReadCSV() {
  const [csvData, setCsvData] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const csvText = reader.result;
      const rows = csvText.split('\n');
      const data = rows.map((row) => row.split(','));
      setCsvData(data);
    };
    reader.readAsText(file);
  };

  return (
    <div>
        <h1>Airdrop Manager</h1>
      <h1>Read CSV File</h1>
      <input type="file" onChange={handleFileChange} />
      <table>
        <thead>
          <tr>
            {csvData[0] && csvData[0].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {csvData.slice(1).map((row, index) => (
            <tr key={index}>
              {row.map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
