import React from 'react';
import logo from './logo.svg';
import './App.css';
import SwipeablePageNavigator from './Viewpager';
import Viewpager from './Viewpager';
import Navigation from './Navigation';


function App() {
  return (
    <div className="App">
        <Navigation title={'User name here'} />
        <Viewpager />
    </div>
  );
}

export default App;
