import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong, faLeftLong } from '@fortawesome/free-solid-svg-icons'

export default function Pagination({totalPages, currentPage}) {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const handleNext = () => {
    if(currentPage === totalPages){
      return
    }
    searchParams.set("page", Number(currentPage)+1)
    navigate({
      pathname: "/search",
      search: searchParams.toString()
    })
  }

  const handlePrevious = () => {
    if(Number(currentPage) === 1){
      return
    }
    searchParams.set("page", Number(currentPage)-1)
    navigate({
      pathname: "/search",
      search: searchParams.toString()
    })
  }

  /* OLD_CODE
  const {dispatch} = useMovieDetailsContext()

  const numberOfPages = Math.ceil(totalMatches/matchesPerPage)

  const baseURL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&`;


  const handlePrevious = () => {
    if(currentPage === 1){
      return
    }
    setCurrentPage(currentPage-1)
  }
   */
  return (
    <div className="pb-4 text-center">
      <button
        className="px-4 py-2 bg-blue-950 rounded-l-full text-gray-200"
        onClick={handlePrevious}
      ><FontAwesomeIcon icon={faLeftLong} /></button>
        <span className="px-4 text-gray-400">{currentPage} of {totalPages}</span>
      <button
        className="px-4 py-2 bg-blue-950 rounded-r-full text-gray-200"
        onClick={handleNext}
      ><FontAwesomeIcon icon={faRightLong} /></button>
    </div>
  )
}
