import React, { useState } from 'react'

export default function Image({src, alt}) {

  const [loading, setLoading] = useState(true)

  const handleImageLoad = () => {
    setLoading(false)
  }

  return (
    <>
      <img
        onLoad={handleImageLoad}
        className={`w-[300px] h-[450px] ${loading ? "img-skeleton-loading" : ''}`} //custom skeleton loading added
        src={src}
        alt={alt}
      />
    </>
  )
}