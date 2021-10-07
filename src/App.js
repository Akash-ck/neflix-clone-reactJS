import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/navbar/NavBar';
import RowPost from './components/RowPost/RowPost';
import {action,originals} from './url'

function App(){
  return (
    <div className="app">
     <NavBar />
     <Banner />
     <RowPost url={originals} title='Netflix originals'/>
     <RowPost url={action} title='Action movies' isSmall />
    </div>
  );

  }
export default App;