import React from 'react'

export default function HomeComp() {
  return (
    <div className="h-20 border border-white">
        <a
            href="#"
            className="border border-red-600 h-full block"
        >
            <img
                src="../../src/assets/logo.png"
                alt="logo"
                className="p-2 h-full cursor-pointer"
            />
        </a>
    </div>
  )
}
