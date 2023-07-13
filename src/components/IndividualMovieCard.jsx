import React, {useState} from "react";

export default function IndividualMovieCard({posterLink, title, year}) {
  const [isImgLoading, setIsImgLoading] = useState(true)

  return (
    <>
      <div className="w-[200px] border border-white text-gray-300">
        <div className={`h-[300px] w-full ${isImgLoading ? 'img-skeleton-loading' : ''}`}>
          <img
            onLoad = {() => {
              setIsImgLoading(false)
            }}
            loading="lazy"
            src={posterLink === "" || posterLink === "N/A" ? '/static/unavailable.png' : posterLink}
            className="h-full w-full object-cover object-top"
            alt={title}
          />
        </div>
        <div className="px-2 w-full text-center text-ellipsis whitespace-nowrap overflow-hidden">
          <span>{title}</span> <br />
          <span>({year})</span>
        </div>
      </div>
    </>
  )
}
