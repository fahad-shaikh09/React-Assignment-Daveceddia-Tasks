import React from "react";

class Student extends React.Component {
  
render() {
    return(
            <div>
                <h2>Student Name: {this.props.name}</h2>
                <h2>Roll #: {this.props.roll} </h2>
                <h2>Batch: {this.props.batch} </h2>
                <h2>Discipline: {this.props.discipline} </h2>
            </div>
    )
}

}



export default Student;