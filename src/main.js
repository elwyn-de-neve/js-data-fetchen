import axios from "axios";


/* ------------------------------------ */
async function fetchJokeByQuery( query ) {

    try {

        const response = await axios.get( "https://api.chucknorris.io/jokes/search", {
            params: {
                query: query
            }

        } );

        const allJokes = response.data.result;
        createJokeList( getFiveJokes( allJokes ) )

    } catch ( e ) {
        console.error( e );
    }
}


/* ------------------------------------ */
function getFiveJokes( array ) {

    const fiveJokes = [];

    for ( let i = 0; i < 5 && array.length; i++ ) {
        fiveJokes.push( array[i].value );
    }

    return fiveJokes;
}


/* ------------------------------------ */
const userInputField = document.getElementById( "input-field" );
const button = document.getElementById( "fetch-data" );


/* ------------------------------------ */
button.addEventListener( "click", () => {

    fetchJokeByQuery( userInputField.value );

} );


/* ------------------------------------ */
const listOfJokes = document.getElementById( "list-of-jokes" );


/* ------------------------------------ */
function createJokeList( jokes ) {

    jokes.map(( joke ) => {

        listOfJokes.innerHTML += `<li>${ joke }</li>`;

    })

}

