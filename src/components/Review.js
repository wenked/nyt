import React from 'react';



const Review = (props) => {
    console.log(props.review.multimedia)
    return (
            <div className="ui item vertical inverted segment">
                <h3 className="ui grey inverted header">{props.review.headline}</h3>
                <h4 className="ui grey inverted header">{props.review.display_title}</h4>
                <p>{props.review.summary_short}</p>
                <a href={props.review.link.url}>{props.review.link.suggested_link_text}</a>
            </div>
                )
}


export default Review;