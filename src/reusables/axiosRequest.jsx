import React from 'react'
import axios from 'axios'

export async function axiosRequest({url, dispatch, navigate, setIsLoading}){
  // const {dispatch} = 'useMovieDetailsContext()'
  // dispatch if extracted directly from useMovieDetailsContext, can cause a re-rendering loop.
  // navigate needs to be passed as props as well because axios request is already a hook which cannot request another hook
  
  setIsLoading(true)

  await axios.get(url)
    .then(response => {

      // get page number '' is none in the URL, else whatever there is
      const pageNumber = new URL(url).searchParams.get("page") ? new URL(url).searchParams.get("page") : '1'
      const responseDataCopy = {...response.data, currentPage: pageNumber}

      //if Response is False i.e. no movie found, then response.data.Search need to be an empty array instead of missing entirely
      if(response.data.Response === 'False'){
        responseDataCopy.Search = []
        alert(responseDataCopy.Error)
      } else {
        responseDataCopy.totalPages = Math.ceil(response.data.totalResults/10).toString()
      }
      
      dispatch({
        type: "store",
        payload: responseDataCopy
      })

      setIsLoading(false) //sets loading state to false after dispatching data to store
    })
    .catch((err) => {
      navigate({
        pathname: "/error"
      })
    })
}