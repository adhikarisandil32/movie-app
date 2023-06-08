import React from 'react'
import SearchBoxContainer from './components/SearchBoxContainer'
import MovieCardsCollection from './components/MovieCardsCollection'

export default function App() {
  
  return (
    <div className="min-h-screen bg-slate-900">
      <SearchBoxContainer />
      <MovieCardsCollection />
    </div>
  )
}
