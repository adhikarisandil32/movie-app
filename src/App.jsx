import React from 'react'
import SearchBoxContainer from './components/SearchBoxContainer'
import MovieCardsCollection from './components/MovieCardsCollection'
import HomeComp from './components/HomeComp'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <HomeComp />
      <SearchBoxContainer />
      <MovieCardsCollection />
    </div>
  )
}
