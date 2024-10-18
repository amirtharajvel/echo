import React from 'react'

function Header() {
  return (
    <header style={styles.header}>
      <h2>My React Application</h2>
    </header>
  )
}

const styles = {
  header: {
    padding: '0.3%',
    paddingLeft: '10%',
  },
}

export default Header
