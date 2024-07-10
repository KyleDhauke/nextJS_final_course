import React from 'react'

interface MovieCardProp {
  Movie: {
    Year: string,
    Poster: string,
    Type: string,
    Title: string
  }
}

export default function MovieCard({ Movie }: MovieCardProp) {
  return (
    <div className="movie">
      <div>
        <p>{Movie.Year}</p>
      </div>
      <div>
        <img src={Movie.Poster !== 'N/A' ? Movie.Poster : 'https://via.placeholder.com/400'} alt={Movie.Title} />
      </div>
      <div>
        <span>{Movie.Type}</span>
        <h3>{Movie.Title}</h3>
      </div>
    </div>
  );
}