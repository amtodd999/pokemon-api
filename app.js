//API-Application Programming Interface
/* 
An interface between two applications allow interactions between them without the use of less abstract language (an outside api can use C++ while another uses java)
Two Types:
    -Browser API: built into the browser and able to expose data from browser and env ex. DOM API allowing us to style page, make popup windows appear, etc
    -Third Party API: require retrieval of their code from the web, such as GoogleMaps api
    **object based - have containers for the data (JSON format)
*/
/*
HTTP Requests: defined set of  request methods which indicate an action to be performed 
    REST - representational state transfer: architectural style for stateless (no connection need to be established) standard of communication
        *GET: retrieves resources by an id
        *POST: creates a new resource
        *PUT: updates a resource using an id
        *DELETE: removes a specific resource using an id
All of these reach an Endpoint
    -url that a client app uses to communicate with the server
*/

let cardImg = document.querySelector("body > div > div > div.card-img > img");
let name = document.querySelector(".name");
let ability = document.querySelector(".ability");
let generateBtn = document.querySelector(".submit-btn");
let weight = document.querySelector("body > div > div > div.card-body > div.paragraph > p > em > strong");

generateBtn.addEventListener("click", (e) => {
    //the e is just a variable name that in this case stands for an event
    e.preventDefault()//this prevents the refresh of the page upon button click
    let userInput = document.querySelector(".search-input").value;
    //console.log(userInput)

    // fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
    //     .then(res => res.json())  //first promise
    //     .then(data => {
    //         console.log(data)
    //         name.innerText = data.name
    //         cardImg.src = data.sprites.front_shiny
    //         ability.innerText = data.abilities[0].ability.name;
    //         weight.innerText = data.weight;
    //     })

    //code below is same as code above, just a different way to write it
    async function getPokemon() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`);
        const data = await response.json();
        name.innerText = data.name
        cardImg.src = data.sprites.front_shiny
        ability.innerText = data.abilities[0].ability.name;
        weight.innerText = data.weight;
    }
    getPokemon();

})

