import React, { useState, useEffect, useRef } from 'react'
import styles from '../app/css_modules/TitleAndFavorite.module.css'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

import 'boxicons'
import BoxIcon from './widgets/BoxIcon'

const TitleAndFavorite = () => {
  const handle = useFullScreenHandle()
  const [title, setTitle] = useState('Sai')
  const [isEditing, setIsEditing] = useState(false)
  const textareaRef = useRef(null) // Create a ref for the textarea

  const changeTitle = () => {
    setIsEditing(true)
  }

  // Function to handle clicks outside the textarea
  const handleClickOutside = (event) => {
    if (textareaRef.current && !textareaRef.current.contains(event.target)) {
      setIsEditing(false) // Stop editing on click outside
    }
  }

  const handleBlur = () => {
    setIsEditing(false) // Switch back to text on blur
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault() // Prevent default behavior (like adding a new line)
      setIsEditing(false) // Switch back to text on Enter key
    }
  }

  // Set up event listener on mount and cleanup on unmount
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <FullScreen handle={handle}>
      <div className={`${styles.container}`}>
        <div className={styles.box} onClick={changeTitle}>
          {isEditing ? (
            <textarea
              ref={textareaRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)} // Update the title as you type
              onBlur={handleBlur} // Switch back to text on blur
              onKeyDown={handleKeyDown} // Handle Enter key
              className={styles.textarea} // Add styles for textarea
              rows={1} // Set the number of rows for height
              // Set the number of columns for width
            />
          ) : (
            <label className={styles.title}>{title}</label>
          )}
        </div>
        <div className={styles.box}>&nbsp;</div>
        <div className={styles.box}>&nbsp;</div>
        <div className={styles.box}>&nbsp;</div>
        <div className={`${styles.box} ${styles.favorite_container}`}>
          {!handle.active ? (
            <BoxIcon
              tooltip='Enter full screen'
              name='fullscreen'
              onClick={handle.enter}
              isFullScreen={handle.active}
            />
          ) : (
            <BoxIcon
              name='exit-fullscreen'
              tooltip='Exit full screen'
              onClick={handle.exit}
              isFullScreen={handle.active}
            />
          )}
          &nbsp;
          <BoxIcon
            name='dots-horizontal-rounded'
            tooltip='Settings'
            isFullScreen={handle.active}
          />
        </div>
      </div>
    </FullScreen>
  )
}

export default TitleAndFavorite
