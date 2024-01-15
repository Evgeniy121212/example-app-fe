import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [appName, setAppName] = useState('click to load app Name');

  async function loadAppHandler() {
    const url = `${process.env.REACT_APP_BACKEND_URL}/app-name`;
    console.log(`request to`, url);
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    setAppName(result.data);
  }

  async function saveHandler() {
    const key = prompt('enter key:');
    const value = prompt('enter value:');
    const url = `${process.env.REACT_APP_BACKEND_URL}/redis/save?key=${key}&value=${value}`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    alert('ok');
  }

  async function getHandler() {
    const key = prompt('enter key:');
    const url = `${process.env.REACT_APP_BACKEND_URL}/redis/get?key=${key}`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    alert(`got: "${result.data}"`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button className='my-button' onClick={loadAppHandler}>{appName}</button>
        <button className='my-button' onClick={saveHandler}>Save Value</button>
        <button className='my-button' onClick={getHandler}>Get Value</button>

        (Note: saving is case sensitive)
      </header>
    </div>
  );
}

export default App;
