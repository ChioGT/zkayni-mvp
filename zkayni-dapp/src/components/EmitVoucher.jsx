import React, { useState, useEffect } from 'react';
import data from '../data/voucher.json';

const EmitVocher = () => {
  
    const jsonData = [
        { id: 1, wallet_address: '0x053a9468851C6140236464c59701f016ee34542e', amount: 30 },
        { id: 2, wallet_address: '0x42143389d54fb71043905736c66968934343434', amount: 25 },
        { id: 3, wallet_address: '0x053a9468851C6140236464c59701f016ee34542e', amount: 35 }
      ];

      const headers = Object.keys(data[0]);
  const rows = data.map(item => Object.values(item));

  return (
    <table>
      <thead>
        <tr>
          {headers.map(header => <th key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => <td key={index}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmitVocher;