import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`
            + '&query='

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    state = {
      reviews: [],
      searchTerm: '' 
    }
  
  
    handleChange = (event) => {
      this.setState({
        searchTerm: event.target.value
      })
    }
  
    handleSubmit = (event) => {
      //because this event handler is arrow function, passing of event is implied
      //so don't need arrow function wrapper below
      //need to pass in event so can preventDefault

      event.preventDefault()
      fetch(SEARCH_URL + this.state.searchTerm) 
      .then(response => response.json())
      .then(data => {
        this.setState({
          reviews: data.results,
          searchTerm: "" //clearing the form
        })
      })
  
    }
  
    render(){
      return (
        <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.searchTerm}
          />
          <input type="submit"></input>
          </form>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      )
    }
  }

  export default SearchableMovieReviewsContainer