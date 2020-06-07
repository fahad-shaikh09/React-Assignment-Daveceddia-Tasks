import React from "react";

function Gate(props) {

    return(

        <div>
            <h3>We will pass the props "isOpen" value as either True or False</h3>
            <h3>If Its True, Component will display "Opened" </h3>
            <h3>If Its False, Component will display "Closed" </h3>

            {props.isOpen ? "Gate is Opened" : "Gate is Closed"}

        </div>
    )
}

export default Gate;