import React from 'react'
import axios from 'axios'

export async function axiosRequest({url, dispatch}){

  //if dispatch extracted directly from useMovieDetailsContext, can cause a re-rendering loop.

  await axios.get(url)
    .then(response => {
      //if Response is False i.e. no movie found, then response.data.Search need to be an empty array instead of missing entirely
      const responseDataCopy = {...response.data}
      if(response.data.Response === 'False'){
        responseDataCopy.Search = []
      } else {
        responseDataCopy.totalPages = Math.ceil(response.data.totalResults/10)
      }

      console.log(responseDataCopy)
      
      dispatch({
        type: "store",
        payload: responseDataCopy
      })
    })
    .catch(err => {
      console.log(err.message)
    })
}