import axios from "axios";

/* ------------------------------------------------------------------------ */
// Function to fetch a random joke
/* ------------------------------------------------------------------------ */
async function fetchRandomJoke() {

    try {

        // Request naar een specifieke endpoint
        const response = await axios.get( "https://api.chucknorris.io/jokes/random" );
        console.log( `Random joke: ${ response.data.value }` );

    } catch ( e ) {

        console.error( e );

    }
}

fetchRandomJoke();


/* ------------------------------------------------------------------------ */
// Function to fetch a joke by category
/* ------------------------------------------------------------------------ */
async function fetchJokeByCategory( category ) {

    try {

        const response = await axios.get( `https://api.chucknorris.io/jokes/random?category=${ category }` );
        console.log( `Joke by category: ${ response.data.value }` );

    } catch ( e ) {

        console.error( e );

    }
}

fetchJokeByCategory( "sport" );

/* ------------------------------------------------------------------------ */
// Function to fetch a joke by category v2
/* ------------------------------------------------------------------------ */
async function fetchJokeByCategoryV2( category ) {

    try {

        const response = await axios.get( `https://api.chucknorris.io/jokes/random`, {
            params: {
                category: category
            }
        } );
        console.log( `Joke by category V2: ${ response.data.value }` );

    } catch ( e ) {

        console.error( e );

    }
}

fetchJokeByCategoryV2( "sport" );