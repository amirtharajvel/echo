import React from 'react'

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2024 My React App</p>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#4CAF50',
    padding: '10px',
    textAlign: 'center',
    color: 'white',
    position: 'fixed',
    width: '100%',
    bottom: 0,
  },
}

export default Footer
