import React from 'react';
import './App.css';
import { MainPage } from './components/MainPage/MainPage';

function App() {
  return (
    <>
      <header>
        <a href='/'><img className="info_button" src="/info.png"/></a>
      </header>
      <main className="App">
        <MainPage/>
      </main>
    </>
  );
}

export default App;
