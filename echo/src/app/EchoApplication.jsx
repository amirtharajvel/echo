import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'
import Sidebar from './nav/sidemenu/Sidebar'

function EchoApplication() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Body />
      <Footer />
    </div>
  )
}

export default EchoApplication
