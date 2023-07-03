import { useParams } from 'react-router-dom'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function MovieDetails() {

  const {imdbID} = useParams() //to get the path params of dynamic routing
  const [movieData, setMovieData] = useState({})

  useEffect(() => {
    makeAxiosCall()
  }, [])

  async function makeAxiosCall(){
    await axios.get(`${import.meta.env.VITE_BASE_URL}&i=${imdbID}`)
      .then(response => {
        setMovieData(response.data)
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  return (
    <div className="w-full py-4 flex flex-col items-center justify-center gap-2">
      <div className="w-fit text-gray-400">
        <img
          src={movieData.Poster}
          alt={movieData.Title}
        />
      </div>
      <div className="px-8 w-[min(600px,100%)]">
        <div className="text-white">
          <span className="font-bold">Title: </span>
          <span className="text-gray-400">
            {
              movieData.Title === "N/A" ? "Not Available Currently" : movieData.Title
            }
          </span>
          <br />
          <span className="font-bold">Genre: </span>
          <span className="text-gray-400">
            {
              movieData.Genre === "N/A" ? "Currently Not Available" : movieData.Genre
            }
          </span>
          <br />
          <span className="font-bold">Type: </span>
          <span className="text-gray-400">
            {
              movieData.Type === "N/A" ? "Currently Not Available" : movieData.Type
            }
          </span>
          <br />
          <span className="font-bold">Runtime: </span>
          <span className="text-gray-400">
            {
              movieData.Runtime === "N/A" ? "Currently Not Available" : movieData.Runtime
            }
          </span>
          <br />
          <span className="font-bold">IMDB Rating: </span>
          <span className="text-gray-400">
            {
              movieData.imdbRating === "N/A" ? "Currently Not Available" : movieData.imdbRating
            }
          </span>
          <br />
          <span className="font-bold">Director: </span>
          <span className="text-gray-400">
            {
              movieData.Director === "N/A" ? "Currently Not Available" : movieData.Director
            }
          </span>
          <br />
          <span className="font-bold">Actors: </span>
          <span className="text-gray-400">
            {
              movieData.Actors === "N/A" ? "Currently Not Available" : movieData.Actors
            }
          </span>
          <br />
          <span className="font-bold">Released Date: </span>
          <span className="text-gray-400">
            {
              movieData.Released === "N/A" ? "Currently Not Available" : movieData.Released
            }
          </span>
          <br />
        </div>
        <div className="text-white">
          <div className="text-center font-bold underline">Plot Summary</div>
          <div className="text-gray-400">
            {
              movieData.Plot === "N/A"? "Currently Not Available" : movieData.Plot
            }
          </div>
        </div>
      </div>
    </div>
  )
}
