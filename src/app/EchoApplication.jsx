import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './nav/sidemenu/Sidebar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Backlog from './Backlog'
import Board from './Board'
import Home from './Home'

function EchoApplication() {
  return (
    <Router>
      <div>
        <Header />
        <Sidebar />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/board' element={<Board />} />
            <Route path='/backlog' element={<Backlog />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default EchoApplication
