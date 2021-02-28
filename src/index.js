import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

ReactDOM.render(<App />,
  document.getElementById('root'));




// let people = new SwapiService();
// people.getAllPeople().then((people) => {
//     people.forEach(element => {
//         console.log(element.name)
//     });
// })

// people.getOnePerson(3).then((people) => {
//     console.log(people.name)
// })

// people.getAllPlanet().then((planet) => {
//     planet.forEach(element => {
//         console.log(element.name)
//     });
// })


// let getResourse = async (url) => {
//     const response = await fetch(url);

//     if(!response.ok) {
//         throw new Error(`WAR ${response.status}`);
//     }
//     const body = await response.json();
//     return body;
// }

// getResourse('https://swapi.dev/api/people/1/').then(body => {console.log(body)}).catch(err => {console.error('ERROR', err)})

// let server = fetch('https://swapi.dev/api/people/1/')
// server.then(response => response.json())
//       .then(body => console.log(body))