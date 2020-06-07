import React from 'react';
import './App.css';
import Student from "./Student.js";
import MediaCard from "./MediaCard.js"
import Gate from "./Gate";
import Room from "./Room"


function App() {
  return (
    <div>
      <h1>Hello <strong className="myname">Fahad Shaikh</strong> </h1>
      <p>This is a paragraph</p>
      <ul>
        <li>This is list item 1</li>
        <li>This is list item 2</li>
        <li>This is list item 3 </li>
      </ul>
      <h2>Tesiting JS Expression</h2>
      <p>20 + 5 =  {20+5} </p>
      <hr/>

      <Student name="Fahad Shaikh" roll="CNC006590" batch={1} discipline="CNC"  />
      <hr/>

      <MediaCard title="Movie" body="Technology related movie" imageUrl="https://i.itworldcanada.com/wp-content/uploads/2019/02/Movie_poster_i_robot.jpg" />
      <hr />

      <h2>Gate Component </h2>
      <Gate isOpen={true} />
      <hr/>

      <h2>Room Component</h2>
      <Room isLit={true}/>




    </div>
  );
}

export default App;
