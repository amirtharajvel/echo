import React from 'react'

function Header() {
  return (
    <header style={styles.header}>
      <h1>My React Application</h1>
    </header>
  )
}

const styles = {
  header: {
    backgroundColor: '#4CAF50',
    padding: '0.3%',
    textAlign: 'center',
    color: 'white',
  },
}

export default Header
