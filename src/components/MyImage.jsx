import React, { useState } from 'react'

export default function Image({src, alt}) {

  const [loading, setLoading] = useState(true)

  const handleImageLoad = () => {
    setLoading(false)
  }

  /*
    {
      loading ? <Skeleton /> : <img onLoad={handleImgLoad} />
      
      //won't work because the skeleton doesn't allow to reach to the second argument where the because of which src is never added to img and image never loads as a result only skeleton keeps pulsating.

      //Not using skeleton component from mui/material for image skeleton. for text it's suitable rather than creating custom ones. For image crating custom is much easier just like this
    }
  */

  return (
    <>
      <img
        onLoad={handleImageLoad}
        className={`w-[300px] h-[450px] object-center object-cover ${loading ? "img-skeleton-loading" : ''}`} //custom skeleton loading added
        src={src}
        alt={alt}
      />
    </>
  )
}