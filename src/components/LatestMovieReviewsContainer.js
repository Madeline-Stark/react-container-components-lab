import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

//build boilerplate class component
class LatestMovieReviewsContainer extends Component {

    // state = {
    //   reviews: []
    // }

    //or:
    constructor(props){
        super(props)
        this.state = {
            reviews: [] 
        }
    }
  
    //at what point in life of component should make fetch request?
    //when it mounts
    componentDidMount = () => {
      fetch(URL)
      .then(response => response.json())
      .then( data => {
        // first console log the data so see what looks like
        // console.log(data)
        this.setState({reviews: data.results})
      })
    }
  
    render() {
        //const { reviews } = this.state
        //can use this when passing in prop
      return (
        <div className='latest-movie-reviews'> 
        <MovieReviews reviews={this.state.reviews}/>
        </div>
      )
    }
  }

  export default LatestMovieReviewsContainer