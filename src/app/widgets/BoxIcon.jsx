import React from 'react'
import { Tooltip } from 'primereact/tooltip'

const BoxIcon = ({ name, onClick }) => {
  return (
    <>
      {/* Tooltip attached to the span wrapper */}
      <Tooltip target={`.box-icon-${name}`} />

      <span
        className={`box-icon-${name}`}
        data-pr-tooltip='No notifications'
        data-pr-position='top' // Set position to top
        data-pr-at='center bottom+15' // Center the tooltip below the span with a 15-pixel gap
        data-pr-my='center top' // Align the tooltip's center to the top of the span
        style={{ fontSize: '2rem', cursor: 'pointer' }}
      >
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
      </span>
    </>
  )
}

export default BoxIcon
