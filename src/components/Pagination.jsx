import React,{useEffect} from 'react'
import { useMovieDetailsContext } from '../store/store'
import axios from 'axios'

export default function Pagination({totalMatches, matchesPerPage, currentPage, setCurrentPage}) {

  const {dispatch} = useMovieDetailsContext()

  const numberOfPages = Math.ceil(totalMatches/matchesPerPage)

  const baseURL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&`;

  useEffect(() => {
    let searchParamName = new URL(location.href).searchParams.get("s")    
    searchParamName = Boolean(searchParamName) ? searchParamName : ''

    const searchParams = new URLSearchParams({
      s: searchParamName,
      page: currentPage
    })

    history.pushState({}, "", `${location.origin}/?${searchParams}`)

    async function pushNewApiDataToStore(){

      await axios.get(`${baseURL}${searchParams}`)
        .then(response => {
          //alert errors if present
          if(response.data.Response === 'False'){
              response.data.Search = []
              alert(response.data.Error)
          }

          //only then dispatch the events
          dispatch({
              type: 'store',
              payload: {...response.data, currentPage: currentPage}
          })
        })
        .catch(err => {
            alert(err.message)
        })
    }

    pushNewApiDataToStore()

  }, [currentPage])

  const handleNext = () => {
    if(currentPage === numberOfPages){
      return
    }
    setCurrentPage(currentPage+1)
  }

  const handlePrevious = () => {
    if(currentPage === 1){
      return
    }
    setCurrentPage(currentPage-1)
  }

  return (
    <div className="pb-4 text-center">
      <button
        className="px-4 py-2 bg-blue-950 rounded-lg text-gray-200"
        onClick={handlePrevious}
      >Previous</button>
        <span className="px-4 text-gray-400">{currentPage} of {numberOfPages}</span>
      <button
        className="px-4 py-2 bg-blue-950 rounded-lg text-gray-200"
        onClick={handleNext}
      >Next</button>
    </div>
  )
}
