import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MovieCardsCollection from './components/MovieCardsCollection'
import PageNotFound from './components/PageNotFound'
import Navbar from './components/Navbar'

export default function App() {
  return (
      <div className="min-h-screen bg-slate-900">
        <div className="sm:px-8">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<></>} />
              <Route path="/*" element={<PageNotFound />} />
              <Route path="/home" element={<Navigate to="/" />}/>
              <Route path="/search" element={<MovieCardsCollection />}/>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
  )
}
