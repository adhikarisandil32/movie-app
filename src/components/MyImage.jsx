import React from 'react'

export default function Image({src, className, alt, setLoading}) {

  function handleImageLoad(){
    console.log("Image Fully Loaded")
    setLoading(false)
  }

  return (
    <img
      onLoad={handleImageLoad}
      className={className}
      src={src}
      alt={alt}
    />
  )
}
