import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import DogList from './DogList';
import DogDetails from './DogDetails';

import perry from './perry.jpg';
import tubby from './tubby.jpg';
import whiskey from './whiskey.jpg';
import duke from './duke.jpg';
import june from './june.jpeg';

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/dogs" >
          <DogList dogs={props.dogs.map(dog => dog)} />
        </Route>
        <Route path="/dogs/:name" >
          <DogDetails dogs={props.dogs}/> {/*what props will this need?*/}
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    </BrowserRouter>
  )
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "June",
      age: 3,
      src: june,
      facts: [
        "June loves trucking other dogs at the park.",
        "June gets anxious when mommas and papas are gone.",
        "June enjoys eating horse poop."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;