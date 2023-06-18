import React from 'react'
import axios from 'axios'

export async function axiosRequest({url, dispatch}){

  await axios.get(url)
    .then(response => {
      //if Response is False i.e. no movie found, then response.data.Search need to be an empty array instead of missing entirely
      if(response.data.Response === 'False'){
        response.data.Search = []
      }

      console.log(response.data)
      
      dispatch({
        type: "store",
        payload: {...response.data}
      })
    })
    .catch(err => {
      console.log(err.message)
    })
}