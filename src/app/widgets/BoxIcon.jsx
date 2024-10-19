import React from 'react'

const BoxIcon = ({ name, onClick }) => {
  return (
    <box-icon
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#e0e0e0' // Change background color
        e.currentTarget.style.cursor = 'pointer' // Change cursor to pointer (hand)
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#f1f2f4' // Reset background color
      }}
      style={{ backgroundColor: '#f1f2f4' }}
      color='#44546F'
      size='md'
      name={name}
      onClick={onClick}
    />
  )
}

export default BoxIcon
