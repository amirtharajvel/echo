import React from 'react'

function Body() {
  return (
    <div style={styles.body}>
      <h2>Welcome to the Body Section</h2>
      <p>This is the main content area of the application.</p>
    </div>
  )
}

const styles = {
  body: {
    marginLeft: '200px',
    padding: '20px',
    minHeight: '90vh',
  },
}

export default Body
