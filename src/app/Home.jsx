import React from 'react'
import { Card } from 'primereact/card'
import '../app/css_modules/Home.module.css'

function Home() {
  return (
    <div style={styles.body}>
      <a href='/board' style={{ textDecoration: 'none' }}>
        <Card
          title='Your Projects'
          style={{
            width: '20%',
            minHeight: '150px',
            overflow: 'hidden',
            color: '#172B4D',
          }}
        >
          <p className={styles.card_body}></p>
        </Card>
      </a>
    </div>
  )
}

const styles = {
  body: {
    marginLeft: '100px',
    padding: '20px',
    minHeight: '90vh',
  },
}

export default Home
