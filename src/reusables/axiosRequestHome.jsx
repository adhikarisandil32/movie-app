import { useEffect, useState } from "react"
import axios from 'axios'

export function axiosRequestForHome({queryParams}){
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [nextPage, setNextPage] = useState(null)

  const request = async () => {
    setLoading(true)
    await axios.request({
      method: 'get',
      url: `/.netlify/functions/serverRequestHome?${queryParams}`,
    }).then(response => {
      setData((previousData) => {
        return [...previousData, ...response.data.results]
      })
      setLoading(false)
      setNextPage(new URLSearchParams(response.data.next).get("page"))
    }).catch(err => {
      console.error(err.message)
    })
  }

  useEffect(() => {
    request()
  }, [queryParams])

  return {data, loading, nextPage}
}