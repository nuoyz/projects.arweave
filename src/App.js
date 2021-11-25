import React, { useState, useContext } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Content from "./components/Content";
import NavSelectContext from './context/navContext';

function App() {
  return (
    <div className="App bg-white">
        <NavSelectContext defaultNavItem="all">
            <Nav/>
            <Content/>
        </NavSelectContext>
    </div>
  );
}

export default App;
