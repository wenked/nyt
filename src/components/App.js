import React from 'react';
import MovieReviewList from './MovieReviewsList';
import SearchBar from './SearchBar'
import axios from 'axios';
import './App.css'


const App = () => {
    const [ReviewList,setReviewList] = React.useState([])


    const onFormSubmit = async (term) => {
        const key = 'gpRxoWtSvAorJmxaUgC18yR6N2OjqZAa';
        const response = await axios.get(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${term}&api-key=${key}`)
        console.log(response.data.results)
        setReviewList(response.data.results)
        console.log(ReviewList)
    }

   
    return (
        <div className="App">
            <SearchBar Submit={onFormSubmit} className="ui search" />
             <MovieReviewList reviewlist={ReviewList}/>
        </div>
    )
}


export default App;