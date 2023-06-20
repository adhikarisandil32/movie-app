import React from "react";

export default function IndividualMovieCard({posterLink, title, year}) {
  return (
    <>
      <div className="w-[200px] border border-white text-gray-300">
        <div className="h-[300px] w-full">
          <img
            src={posterLink}
            className="h-full w-full object-cover object-top"
            alt={title}
          />
        </div>
        <div className="px-2 w-full text-center text-ellipsis whitespace-nowrap overflow-hidden">
          {title} <br />
          ({year})
        </div>
      </div>
    </>
  )
}
