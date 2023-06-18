import React from 'react'
import SearchBox from './SearchBox'

export default function HomeComp() {
  return (
    <>
      <div className="h-20 flex justify-between items-center">
          <div className="h-16">
            <a
              href="#"
              className="h-full block"
            >
              <img
                src="static/logo.png"
                alt="logo"
                className="p-2 h-full w-full object-contain object-center cursor-pointer"
              />
            </a>
          </div>
          <div className="w-[min(100%,400px)]">
            <SearchBox />
          </div>
          <div></div> {/* just for aligining searchbox to the center */}
      </div>
    </>
  )
}
