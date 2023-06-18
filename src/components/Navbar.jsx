import React from 'react'
import {Link} from 'react-router-dom'
import SearchBox from './SearchBox'

export default function Navbar() {

  return (
    <>
      <div className="h-20 flex justify-between items-center">
          <div className="h-16">
            <Link
              to="/"
              className="h-full block"
            >
              <img
                src="static/logo.png"
                alt="logo"
                className="p-2 h-full w-full object-contain object-center cursor-pointer"
              />
            </Link>
          </div>
          <div className="w-[min(100%,400px)]">
            <SearchBox />
          </div>
          <div></div> {/* just for aligining searchbox to the center */}
      </div>
    </>
  )
}
