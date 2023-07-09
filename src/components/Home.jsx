import React from 'react'
import axios from 'axios'
import IndividualMovieCard from './IndividualMovieCard'

export default function Home() {
  const arr = []

  for(let i = 1; i <= 100; i++){
    arr.push(i)
  }

  return (
    <div className="flex-container">
      {
        arr.map((item, idx) => {
          return(
            <a href="/details/tt1001520" key={idx}>
              <IndividualMovieCard
                posterLink={"no-link"}
                title={item}
                year={2020}
              />
            </a>
          )
        })
      }
    </div>
  )
}
