
import React from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM naming convention
    <div className="app">

        {/* SideBar */}
        <Sidebar />

        {/* Chat */}
        <Chat />
        
    </div>
  );
}

export default App;
