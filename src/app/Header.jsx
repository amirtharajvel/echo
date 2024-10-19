import React from 'react'

function Header() {
  return (
    <header style={{ ...styles.header, display: 'flex', alignItems: 'center' }}>
      <a
        href='/home'
        style={{
          display: 'flex', // Use Flexbox for horizontal layout
          alignItems: 'center', // Vertically center both icon and text
          textDecoration: 'none', // Remove underline on the link
        }}
      >
        {/* Wrap box-icon in a span to make it clickable */}
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <box-icon color='#0C66E4' type='solid' name='bug'></box-icon>
        </span>
        <span
          style={{
            fontSize: '22px',
            marginLeft: '8px',
            color: '#172B4D',
            lineHeight: '1', // Align text properly
            cursor: 'pointer', // Ensure pointer cursor on hover
          }}
        >
          Echo
        </span>
      </a>
    </header>
  )
}

const styles = {
  header: {
    padding: '0.9% 0.2% 0.9% 6%',
    borderBottom: '1px solid #DCDFE4',
    display: 'flex', // Flexbox to ensure the header content stays aligned
    alignItems: 'center', // Vertically center the items in the header
  },
}

export default Header
