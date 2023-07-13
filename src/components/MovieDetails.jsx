import { useParams } from 'react-router-dom'
import axios from 'axios'
import React, { useEffect, useState, lazy, Suspense } from 'react'
import MyImage from './MyImage'
const LazyPageNotFound = lazy(() => import('./PageNotFound'))

export default function MovieDetails() {

  const {imdbID} = useParams() //to get the path params of dynamic routing
  const [movieData, setMovieData] = useState({})
  const [movieFound, setMovieFound] = useState(true)
  const unavailableData = "********"

  useEffect(() => {
    makeAxiosCall()
  }, [])

  async function makeAxiosCall(){
    await axios.get(`/.netlify/functions/serverRequest/?i=${imdbID}`)
      .then(response => {
        if(response.data.Response === "False"){
          setMovieFound(false)
          return
        }
        setMovieData(response.data)
      })
      .catch(err => {
        console.error(err.message)
      })
  }

  return (
    <>
      { movieFound ? 
        <div className="w-full py-4 flex flex-col items-center justify-center gap-2">
          <div className="w-fit text-gray-400 cursor-pointer border border-white">
            {
              <MyImage
                src={movieData.Poster === 'N/A' ? '/public/static/unavailable.png':movieData.Poster}
                alt={movieData.Title}
              />
            }
          </div>
          <div className="px-8 w-[min(600px,100%)]">
            <div className="text-white">
              <span className="font-semibold">Title: </span>
              <span className="text-gray-400">
                {
                  movieData.Title === "N/A" ? unavailableData : movieData.Title
                }
              </span>
              <br />
              <span className="font-semibold">Genre: </span>
              <span className="text-gray-400">
                {
                  movieData.Genre === "N/A" ? unavailableData : movieData.Genre
                }
              </span>
              <br />
              <span className="font-semibold">Type: </span>
              <span className="text-gray-400">
                {
                  movieData.Type === "N/A" ? unavailableData : movieData.Type
                }
              </span>
              <br />
              <span className="font-semibold">Runtime: </span>
              <span className="text-gray-400">
                {
                  movieData.Runtime === "N/A" ? unavailableData : movieData.Runtime
                }
              </span>
              <br />
              <span className="font-semibold">IMDB Rating: </span>
              <span className="text-gray-400">
                {
                  movieData.imdbRating === "N/A" ? unavailableData : movieData.imdbRating
                }
              </span>
              <br />
              <span className="font-semibold">Director: </span>
              <span className="text-gray-400">
                {
                  movieData.Director === "N/A" ? unavailableData : movieData.Director
                }
              </span>
              <br />
              <span className="font-semibold">Actors: </span>
              <span className="text-gray-400">
                {
                  movieData.Actors === "N/A" ? unavailableData : movieData.Actors
                }
              </span>
              <br />
              <span className="font-semibold">Released Date: </span>
              <span className="text-gray-400">
                {
                  movieData.Released === "N/A" ? unavailableData : movieData.Released
                }
              </span>
              <br />
            </div>
            <div className="text-white">
              <div className="text-center font-semibold underline">Summary</div>
              <div className="text-gray-400 break-words">
                {
                  movieData.Plot === "N/A" ? "*****************************************************************************************************************************************************************************************************************************************************************************************************" : movieData.Plot
                }
              </div>
            </div>
          </div>
        </div> : <Suspense fallback={""}><LazyPageNotFound /></Suspense>
      }
    </>
  )
}
