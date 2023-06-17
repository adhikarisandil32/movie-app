import React from 'react'

export default function PageNotFound() {
  return (
      <div className="mt-8 h-96">
        <div className="flex justify-center">
          <h1
            className="w-fit text-8xl text-transparent text-center font-family-exo bg-clip-text bg-cover bg-[url('https://st2.depositphotos.com/5562698/8451/v/950/depositphotos_84515386-stock-illustration-floral-grey-background-seamless-texture.jpg')]"
          >404</h1>
        </div>
        <div className="my-4 text-xl text-white text-center">
          <span>The page you are looking for</span> <br />
          <span>is not currently available</span>
        </div>
        <div className="flex justify-center">
          <img
            className="w-[500px] object-contain"
            src="/public/static/404.png"
            alt="" />
        </div>
      </div>
  )
}
