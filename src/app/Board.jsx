import React from 'react'
import { AppBreadCrumb } from './nav/AppBreadCrumb'
import TitleAndFavorite from './TitleAndFavorite'
import SplitterWithCards from './SplitterWithCards' // Import the SplitterWithCards component

function Board() {
  return (
    <div style={styles.body}>
      <AppBreadCrumb />
      <TitleAndFavorite />

      {/* Add the SplitterWithCards component here */}
      <div style={{ marginTop: '20px' }}>
        <SplitterWithCards />
      </div>
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

export default Board
