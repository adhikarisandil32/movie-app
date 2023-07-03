import { useParams } from 'react-router-dom'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Skeleton } from '@mui/material'
import MyImage from './MyImage'

export default function MovieDetails() {

  const {imdbID} = useParams() //to get the path params of dynamic routing
  const [movieData, setMovieData] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    makeAxiosCall()
    setLoading(true)
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
    <>
      <div className="w-full py-4 flex flex-col items-center justify-center gap-2">
        <div className="w-fit text-gray-400 cursor-pointer border border-white">
          {
            loading ? <Skeleton
              sx={{bgcolor: '#1e293b'}}
              variant="rectangular"
              animation="pulse"
              width={300}
              height={450}
            /> : <MyImage
              setLoading={setLoading}
              className="w-[300px] h-[450px]"
              src={movieData.Poster}
              alt={movieData.Title}
            />
          }
        </div>
        <div className="px-8 w-[min(600px,100%)]">
          <div className="text-white">
            <span className="font-semibold">Title: </span>
            <span className="text-gray-400">
              {
                movieData.Title === "N/A" ? "Data Unavailable" : movieData.Title
              }
            </span>
            <br />
            <span className="font-semibold">Genre: </span>
            <span className="text-gray-400">
              {
                movieData.Genre === "N/A" ? "Data Unavailable" : movieData.Genre
              }
            </span>
            <br />
            <span className="font-semibold">Type: </span>
            <span className="text-gray-400">
              {
                movieData.Type === "N/A" ? "Data Unavailable" : movieData.Type
              }
            </span>
            <br />
            <span className="font-semibold">Runtime: </span>
            <span className="text-gray-400">
              {
                movieData.Runtime === "N/A" ? "Data Unavailable" : movieData.Runtime
              }
            </span>
            <br />
            <span className="font-semibold">IMDB Rating: </span>
            <span className="text-gray-400">
              {
                movieData.imdbRating === "N/A" ? "Data Unavailable" : movieData.imdbRating
              }
            </span>
            <br />
            <span className="font-semibold">Director: </span>
            <span className="text-gray-400">
              {
                movieData.Director === "N/A" ? "Data Unavailable" : movieData.Director
              }
            </span>
            <br />
            <span className="font-semibold">Actors: </span>
            <span className="text-gray-400">
              {
                movieData.Actors === "N/A" ? "Data Unavailable" : movieData.Actors
              }
            </span>
            <br />
            <span className="font-semibold">Released Date: </span>
            <span className="text-gray-400">
              {
                movieData.Released === "N/A" ? "Data Unavailable" : movieData.Released
              }
            </span>
            <br />
          </div>
          <div className="text-white">
            <div className="text-center font-semibold underline">Summary</div>
            <div className="text-gray-400">
              {
                movieData.Plot === "N/A"? "Data Unavailable" : movieData.Plot
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
