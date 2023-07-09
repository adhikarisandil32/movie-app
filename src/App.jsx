import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import MovieCardsCollection from './components/MovieCardsCollection'
import PageNotFound from './components/PageNotFound'
import InternalError from './components/InternalError'
import Navbar from './components/Navbar'
import MovieDetails from './components/MovieDetails'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="sm:px-8">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/error" element={<InternalError />} />
            <Route path="/home" element={<Navigate to="/" />}/>
            <Route path="/search" element={<MovieCardsCollection />}/>
            <Route path="/details/:imdbID" element={<MovieDetails />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}
