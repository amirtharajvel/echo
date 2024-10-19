import React, { useState } from 'react'

const BoxIcon = ({ name, onClick, tooltip, isSystemFullScreen }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  const tooltipPosition = isSystemFullScreen ? 'top' : 'bottom'

  return (
    <>
      <span
        className={`box-icon-${name}`}
        style={{ fontSize: '2rem', cursor: 'pointer', position: 'relative' }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <box-icon
          style={{ backgroundColor: '#f1f2f4' }}
          color='#44546F'
          size='md'
          name={name}
          onClick={onClick}
        />
        {showTooltip && (
          <div
            style={{
              position: 'absolute',
              [tooltipPosition]: '100%', // Position above the icon
              left: '50%', // Center horizontally
              transform: 'translateX(-50%)', // Adjust for centering
              marginBottom: '20px', // Increase gap between the tooltip and icon
              backgroundColor: '#44546F',
              color: '#fff',
              padding: '8px', // Adjust padding for a better look
              borderRadius: '4px',
              fontSize: '12px',
              zIndex: 1000,
              width: 'auto', // Set width to auto to adjust based on content
              whiteSpace: 'nowrap', // Prevents text wrapping, keeps it in one line
              textAlign: 'center', // Center the text
            }}
          >
            {tooltip}
          </div>
        )}
      </span>
    </>
  )
}

export default BoxIcon
