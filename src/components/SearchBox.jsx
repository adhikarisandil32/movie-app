import React, {useState, useEffect} from "react";
import axios from 'axios'
import { useMovieDetailsContext } from "../store/store";

export default function SearchBox() {
  
  const baseURL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&`;

  const {dispatch} = useMovieDetailsContext()
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    let searchParamName = new URL(location.href).searchParams.get("s")    
    searchParamName = Boolean(searchParamName) ? searchParamName : ''

    let currentPage = new URL(location.href).searchParams.get("page")
    currentPage = Boolean(currentPage) ? parseInt(currentPage) : 1

    setSearchString(searchParamName)

    if(searchParamName){

      axios.get(`${baseURL}${location.search.slice(1)}`)
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
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const searchParam = new URLSearchParams({
      s: searchString,
    }).toString();

    history.pushState({}, "", `${location.origin}/?${searchParam}`)

    let currentPage = new URL(location.href).searchParams.get("page")
    currentPage = Boolean(currentPage) ? parseInt(currentPage) : 1

    await axios
      .get(`${baseURL}${searchParam}`)
      .then((response) => {

        if(response.data.Response === 'False'){
          response.data.Search = []
          alert(response.data.Error)
        }

        dispatch({
          type: 'store',
          payload: {...response.data, currentPage: currentPage}
        })
      })
      .catch((err) => {
        alert(err.message)
      });
  };

  return (
    <div className="w-[min(100%,375px)]">
      <form
        onSubmit={handleSubmit}
        className="full flex"
      >
        <input
          className='w-full py-1 px-2 border-2 border-gray-500 rounded-md outline-none'
          type="text"
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
          placeholder="Enter Movie Name"
        />
        <button
          className="py-1 px-4 bg-blue-700 text-white border-2 border-blue-700 rounded-md font-semibold"
        >Search</button>
      </form>
    </div>
  );
}
