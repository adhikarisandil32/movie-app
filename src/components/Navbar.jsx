import React from 'react'
import {Link} from 'react-router-dom'
import SearchBox from './SearchBox'

export default function Navbar() {

  return (
    <>
      <div className="sm:h-20 w-full flex flex-col sm:flex-row justify-between items-center sticky top-0 left-0 z-10 bg-slate-900">
          <div className="h-16">
            <Link
              to="/"
              className="h-full block"
            >
              <img
                src="/static/logo.png"
                alt="logo"
                className="p-2 h-full w-full object-contain object-center cursor-pointer"
              />
            </Link>
          </div>
          <div className="w-[min(100%,400px)]">
            <SearchBox />
          </div>
          <div className="w-36">
            {/* just for aligining searchbox to the center. aspect ratio of logo is a little over 2.4 width to height. h-16 = 64px in the actual logo place. hence this div also should have width of 64*2.4 = 154px. in tailwind close to 154px is 144 (w-36) or 160px (w-40). chose w-36 */}
          </div>
      </div>
    </>
  )
}
