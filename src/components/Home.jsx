import React, {useCallback, useRef, useState} from 'react'
import IndividualMovieCard from './IndividualMovieCard'
import { axiosRequestForHome } from '../reusables/axiosRequestHome'
import { CircularProgress } from '@mui/material'

export default function Home() {
  const [queryParamOptions, setQueryParamOptions] = useState({
    sort: 'year.decr',
    page: '1',
    titleType: 'movie',
    endYear: new Date().getFullYear(),
    limit: '20'
  })
  const queryParams = new URLSearchParams(queryParamOptions).toString()
  
  const {data, loading, nextPage} = axiosRequestForHome({queryParams})

  const observer = useRef() //because the observer need to persist beyond render
  const lastMovieCardElem = useCallback((node) => {
    if(loading) return
    if(observer.current) observer.current.disconnect()
    //if the observer is present already, we need to disconnect it because now there is going to be another element to observe

    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        if(nextPage) setQueryParamOptions({...queryParamOptions, page: nextPage})
      }
    })
    
    if(node) observer.current.observe(node)
  }, [loading, nextPage])
  //if its loading, we don't want to do anything else, bit re-create the function if nextPage change.
  //we could remove loading and its statement as well because our element that uses loading is not going to be selected as last element.

  return (
    <>
      <div className="flex-container text-white">
        {
          data?.map((item, idx) => {
            return(
              <a
                href={`/details/${item.id}`}
                key={idx}
                ref={data.length === idx+1 ? lastMovieCardElem : null}
              >
                <IndividualMovieCard
                  posterLink={item.primaryImage ? item.primaryImage.url : ''}
                  title={item.titleText ? item.titleText.text : ''}
                  year={item.releaseYear ? item.releaseYear.year : ''}
                />
              </a>
            )
          })
        }
      </div>
      {loading && <div className="py-8 text-center"><CircularProgress size={80} /></div>}
    </>
  )
}
