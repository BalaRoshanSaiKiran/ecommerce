import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'

const App = () => {
  return (
    <div className="App-main-div">
      <div className="App-Navbar-div">
        <Navbar/>
      </div>
      <div className='App-Header-div'>
        <Header/>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default App