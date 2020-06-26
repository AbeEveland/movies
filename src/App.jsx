import React, { Component } from 'react'
import Movies from './components/Movies'
import Header from './components/Header'
import sampleMovieData from './data/sample-movie-api.json'

class App extends Component {
  state = {
    movies: sampleMovieData.results,
  }
  render() {
    console.log(this.state.movies)
    const moviesToRender = this.state.movies.map(movie => (
      <Movies
        title={movie.title}
        poster={movie.poster}
        overview={movie.overview}
      />
    ))
    return (
      <>
        <Header />
        {moviesToRender}
      </>
    )
  }
}

export default App
