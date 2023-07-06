import React, {useEffect, useState} from 'react'
import { useSearchParams, useNavigate, Link } from 'react-router-dom'
import IndividualMovieCard from './IndividualMovieCard'
import { useMovieDetailsContext } from '../store/store'
import { axiosRequest } from "../reusables/axiosRequest";
import Pagination from './Pagination'
import { CircularProgress } from '@mui/material';

export default function MovieCardsCollection() {
  
  const [isLoading, setIsLoading] = useState(false)
  const baseURL = `${import.meta.env.VITE_BASE_URL}&`;
  const {matchedResults, dispatch} = useMovieDetailsContext()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams() //use two values, searchParams & setSearchParams
  const showPagination = matchedResults.Search.length === 0 ? false : true;

  // dummy function to check if it only changes the search parameter
  /* const changeSingleQueryParameter = (searchParams) => {
    searchParams.set("page", 2)
    navigate({
      pathname: "/search",
      search: searchParams.toString()
    })
  } */

  useEffect(() => {
    axiosRequest({
      url: `${baseURL}${searchParams.toString()}`,
      dispatch: dispatch,
      navigate: navigate,
      setIsLoading: setIsLoading
    })
  }, [searchParams])

  /* OLD_CODE
  const {matchedResults} = useMovieDetailsContext()
  const [currentPage, setCurrentPage] = useState()

  //useState is only executed during the initial render of the component. Therefore, currentPage will be set to the initial value of matchedResults.currentPage and will not update automatically when matchedResults changes. Hence useEffect
  useEffect(() => {
    setCurrentPage(matchedResults.currentPage)
  }, [matchedResults])

  const showPagination = matchedResults.Search.length === 0 ? false : true;
  */

  return (
    <>
      <div className="relative">
        <div
          className={`absolute block top-1/2 left-1/2 -translate-x-1/2 ${showPagination ? "-translate-y-1/2" : ""}`}
          //To push CircularProgress below when cards are absent and centerize along y-axis when card are present we use condition in -translate-y. Instead of making another new flag we take advantage of pagination flag.
        >
          {
            isLoading ? <CircularProgress size={100} /> : ''
          }
        </div>
        <div className={`flex-container ${isLoading ? 'opacity-5' : ''}`}>
          {
            matchedResults.Search.map((item, idx) => {
              return (
                <a
                  className="hover:cursor-pointer"
                  key={idx}
                  href={`/details/${item.imdbID}`}
                > 
                  <IndividualMovieCard
                    posterLink={item.Poster}
                    title={item.Title}
                    year={item.Year}
                  />
                </a> //a tag instead of link so that when user clicks it, the page reloads clearing the searchbox
              )
            })
          }        
        </div>
      </div>
      <div>
        {
          showPagination && <Pagination
            totalPages={matchedResults.totalPages}
            currentPage={matchedResults.currentPage}
            /* setCurrentPage={setCurrentPage} */
          />
        }
      </div>
    </>
  )
}
