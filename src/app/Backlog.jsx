import React from 'react'
import { AppBreadCrumb } from './nav/AppBreadCrumb'
import TitleAndFavorite from './TitleAndFavorite'

function Backlog() {
  return (
    <div style={styles.body}>
      <AppBreadCrumb />
      <TitleAndFavorite />
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

export default Backlog
