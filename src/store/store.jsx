import React, {useReducer, useContext} from 'react'

const MovieDetailsContext = React.createContext()

export function useMovieDetailsContext(){
    return useContext(MovieDetailsContext)
}

//to use above, whenever we want to use {matchedResults, dispatch}
// import {useMovieDetailsContext} from '../store/store'
// const {matchedResults, dispatch} = useMovieDetailsContext()
// now both the matchedResults and dispatch are available to be used in that component

function reducer(state, action) {
    switch(action.type){
        case 'store':
            return action.payload
        default:
            return state
    }
}

export default function ContextProvider(props){

    const [matchedResults, dispatch] = useReducer(reducer, {Search: []})

    return(
        <MovieDetailsContext.Provider
            value={{matchedResults, dispatch}} //must be inside {{}} not {}
        >
            {props.children}
        </MovieDetailsContext.Provider>
    )
}