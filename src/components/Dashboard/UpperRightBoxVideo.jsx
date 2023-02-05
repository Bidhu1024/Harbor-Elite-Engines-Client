import React from 'react'

const UpperRightBoxVideo = () => {
    const src = 'https://www.youtube.com/embed/qRao6FARFRo'
  return (
    <iframe
    width="595"
    height="240"
    src={src}
    allow="autoplay"
    title="Youtube Player"
    frameborder="0"
    allowFullScreen
  />
  )
}

export default UpperRightBoxVideo