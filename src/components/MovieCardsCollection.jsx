import React, {useEffect} from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'
import IndividualMovieCard from './IndividualMovieCard'
import { useMovieDetailsContext } from '../store/store'
import { axiosRequest } from "../reusables/axiosRequest";
import Pagination from './Pagination'

export default function MovieCardsCollection() {

  const {matchedResults, dispatch} = useMovieDetailsContext()
  const baseURL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&`;
  const showPagination = matchedResults.Search.length === 0 ? false : true;

  const [searchParams] = useSearchParams()
  console.log(searchParams)

  useEffect(() => {
    axiosRequest({
      url: `${baseURL}${searchParams.toString()}`,
      dispatch: dispatch
    })
  }, [searchParams])
  /*
  const {matchedResults} = useMovieDetailsContext()
  const [currentPage, setCurrentPage] = useState()

  //useState is only executed during the initial render of the component. Therefore, currentPage will be set to the initial value of matchedResults.currentPage and will not update automatically when matchedResults changes. Hence useEffect
  useEffect(() => {
    setCurrentPage(matchedResults.currentPage)
  }, [matchedResults])

  const showPagination = matchedResults.Search.length === 0 ? false : true;
  */

  return ( 
    <div>
      <span className="text-white">This is MovieCardsCollection</span>
      <div className="flex-container">
        {
          matchedResults.Search.map((item, idx) => {
            return (
              <a
                className="hover:cursor-pointer"
                key={idx}
                href={`https://imdb.com/title/${item.imdbID}`}
                target="_blank"
              > 
                <IndividualMovieCard
                  posterLink={item.Poster}
                  title={item.Title}
                  year={item.Year}
                />
              </a>
            )
          })
        }
      </div>
      {
        showPagination && <Pagination
          totalPages={matchedResults.totalPages}
          /* currentPage={currentPage}
          setCurrentPage={setCurrentPage} */
        />
      }
      <div>
        <button style={{color: "white"}} onClick={() => {
          searchParams.set("page", 4).toString()
        }}>Click</button>
      </div>
    </div>
  )
}
