import React, { Component } from 'react'

class Movies extends Component {
  render() {
    const { title, poster, overview } = this.props
    return (
      <>
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active">
            <div class="d-flex w-100 justify-content-between">
              <p class="movietitle one">{title}</p>
            </div>
            <p class="overview two">{overview}</p>

            <small>
              <p class="three">
                <img src={poster} alt="Poster" height="160px" width="220px" />
              </p>
            </small>
          </a>
        </div>
      </>
    )
  }
}

export default Movies
