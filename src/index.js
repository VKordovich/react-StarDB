//https://swapi.dev/


let getResourse = async (url) => {
    const response = await fetch(url);
    const body = await response.json();
    return body;
}

getResourse('https://swapi.dev/api/people/1/').then(body => {console.log(body)})

// let server = fetch('https://swapi.dev/api/people/1/')
// server.then(response => response.json())
//       .then(body => console.log(body))