import React from 'react';
import Review from './Review'





const MovieReviewList = (props) => {
    const renderList = props.reviewlist.map( rev => {
        return (
            <div>
                <Review review={rev} />
            </div>
        )
    })


    return <div className="ui divided items">{renderList}</div>
}



export default MovieReviewList;