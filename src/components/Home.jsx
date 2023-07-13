import React, {useRef, useEffect, useState, Suspense} from 'react'
import axios from 'axios'
const LazyIndividualMovieCard = React.lazy(() => import('./IndividualMovieCard'))
// import IndividualMovieCard from './IndividualMovieCard'

export default function Home() {
  const [data, setData] = useState([])

  const queryParams = new URLSearchParams({
      sort: 'year.decr',
      page: '1',
      titleType: 'movie',
      endYear: new Date().getFullYear(),
      limit: '50'
  }).toString()

  const callAPI = async (searchQueries) => {
    await axios.request({
      method: 'get',
      url: `/.netlify/functions/serverRequestHome?${searchQueries}`,
    }).then(response => {
      setData(response.data.results)
    }).catch(err => {
      console.error(err.message)
    })
  }

  useEffect(() => {
    callAPI(queryParams)
  }, [])

  return (
    <div className="flex-container text-white">
      {
        data.map((item, idx) => {
          return(
            <a
              href={`/details/${item.id}`}
              key={idx}
            >
              <Suspense fallback={""}>
                <LazyIndividualMovieCard
                  posterLink={item.primaryImage ? item.primaryImage.url : ''}
                  title={item.titleText ? item.titleText.text : ''}
                  year={item.releaseYear ? item.releaseYear.year : ''}
                />
              </Suspense>
            </a>
          )
        })
       }
    </div>
  )
}
