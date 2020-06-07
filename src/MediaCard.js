import React from "react";


function MediaCard(props) {

    return(
        <div>
            <h2>Title:  {props.title} </h2>
            <p>Body:  {props.body} </p>
            <img src={props.imageUrl} />
        </div>       
    )
}

export default MediaCard;