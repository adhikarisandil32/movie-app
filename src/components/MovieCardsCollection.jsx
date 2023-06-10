import React, {useState, useEffect} from 'react'
import IndividualMovieCard from './IndividualMovieCard'
import { useMovieDetailsContext } from '../store/store'
import Pagination from './Pagination'

export default function MovieCardsCollection() {

  const {matchedResults} = useMovieDetailsContext()
  const [currentPage, setCurrentPage] = useState()

  //useState is only executed during the initial render of the component. Therefore, currentPage will be set to the initial value of matchedResults.currentPage and will not update automatically when matchedResults changes. Hence useEffect
  useEffect(() => {
    setCurrentPage(matchedResults.currentPage)
  }, [matchedResults])

  const showPagination = matchedResults.Search.length === 0 ? false : true;

  return (
    <div>
      <div className='flex-container'>
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
          totalMatches={matchedResults.totalResults}
          matchesPerPage={10}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      }
    </div>
  )
}
