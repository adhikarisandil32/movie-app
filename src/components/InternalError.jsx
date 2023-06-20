import React from 'react'

export default function InternalError() {

  return (
    <div className="mt-8 h-96">
      <div className="flex justify-center">
        <h1
          className="w-fit text-8xl text-transparent text-center font-family-exo bg-clip-text bg-cover bg-[url('https://st2.depositphotos.com/5562698/8451/v/950/depositphotos_84515386-stock-illustration-floral-grey-background-seamless-texture.jpg')]"
        >500</h1>
      </div>
      <div className="my-4 text-3xl text-white text-center">
        <span>
          Oops!! <br />
          Looks like we have an issue <br />
          connecting to the server
        </span> 
      </div>
    </div>
  )
}
