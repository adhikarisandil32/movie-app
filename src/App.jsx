import React, {lazy, Suspense} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
const LazyHome = lazy(() => import('./components/Home'))
const LazyMovieCardsCollection = lazy(() => import('./components/MovieCardsCollection'))
const LazyPageNotFound = lazy(() => import('./components/PageNotFound'))
const LazyMovieDetails = lazy(() => import('./components/MovieDetails'))
import Navbar from './components/Navbar'


export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="sm:px-8">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Suspense fallback={""}><LazyHome /></Suspense>} />
            <Route path="/*" element={<Suspense fallback={""}><LazyPageNotFound /></Suspense>} />
            <Route path="/home" element={<Navigate to="/" />}/>
            <Route path="/search" element={<Suspense fallback={""}><LazyMovieCardsCollection /></Suspense>}/>
            <Route path="/details/:imdbID" element={<Suspense fallback={""}><LazyMovieDetails /></Suspense>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}
