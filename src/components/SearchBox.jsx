import React, {useState} from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBox() {

  let searchParam = new URLSearchParams(location.search).get("s")
  searchParam = searchParam ? searchParam : ''

  const [searchString, setSearchString] = useState(searchParam)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: '/search',
      search: createSearchParams({
        s: searchString.trim(),
        page: 1
      }).toString()
    })
  }

  /*OLD_CODE
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
  */
  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="full flex"
      >
        <input
          className='w-full py-1 px-2 border border-blue-600 rounded-l-md outline-none'
          type="text"
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
          placeholder="Enter Movie/Series Title"
          required
        />
        <button
          className="py-1 px-4 bg-blue-700 text-white border border-blue-600 rounded-r-md font-semibold"
          type="submit"
        ><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </form>
    </div>
  )
}
