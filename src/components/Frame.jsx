import React, { useState, useRef } from 'react'

function Frame({ frame, className }) {
  const [isZoomed, setIsZoomed] = useState(false)
  const iframeRef = useRef(null)
  const zoomOutIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24H280c13.3 0 24-10.7 24-24s-10.7-24-24-24H136z"/></svg>'
  const zoomInIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"/></svg>'


  const handleMouseDown = (event) => {
    console.log({ handleMouseDown: event })
    if (event.ctrlKey) {
      setIsZoomed(true)
    }
  }

  const handleMouseUp = () => {
    setIsZoomed(false)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Control' && !isZoomed) {
      setIsZoomed(true)
    } else if (!event.ctrlKey && isZoomed) {
      setIsZoomed(false)
    }
  }

  const handleKeyUp = (event) => {
    if (event.key === 'Control' && isZoomed) {
      setIsZoomed(false)
    }
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  return (
    <>
      <div
        ref={iframeRef}
        className={className + (isZoomed ? ' zoomed' : '')}
        tabIndex={0} // Make the div focusable for keyboard events
      >
        <iframe src={frame.src} title={frame.name}></iframe>
        <button onClick={toggleZoom} dangerouslySetInnerHTML={{__html: isZoomed? zoomOutIcon: zoomInIcon}} ></button>
      </div>
    </>
  )
}

export default Frame