import axios from "axios";


/* ------------------------------------------------------------------------ */
// Fetch data by query from Chuck Norris API
/* ------------------------------------------------------------------------ */
async function fetchJokeByQuery( query ) {

    try {

        const response = await axios.get( "https://api.chucknorris.io/jokes/search", {
            params: {
                query: query
            }

        } );

        const allJokes = response.data.result;

        /* ------------------------------------ */
        // Create a list of max 5 jokes that uses an array of all jokes as an argument
        /* ------------------------------------ */
        createJokeList( allJokes.slice( 0, 5 ) );

    } catch ( e ) {
        console.error( e );
    }
}


/* ------------------------------------------------------------------------ */
// Reference to user input field and button
/* ------------------------------------------------------------------------ */
const userInputField = document.getElementById( "input-field" );
const form = document.getElementById('onSubmit');

/* ------------------------------------------------------------------------ */
// Create an event listener that returns a function with the input value as an argument
/* ------------------------------------------------------------------------ */
form.addEventListener( "submit", ( e ) => {

    // Default behaviour van form is refreshen by submit
    e.preventDefault();

    fetchJokeByQuery( userInputField.value );

} );


/* ------------------------------------------------------------------------ */
// A function that loops through all jokes and returns an list item per joke in the array
/* ------------------------------------------------------------------------ */
function createJokeList( jokes ) {

    const listOfJokes = document.getElementById( "list-of-jokes" );

    // New!! In the old situation you had to wrap all elements in a parent container and then delete the children one by one
    listOfJokes.replaceChildren();

    jokes.map( ( joke ) => {

        /* ------------------------------------ */
        // Onveilige manier:
        /* ------------------------------------ */
        // const listOfJokes = document.getElementById( "list-of-jokes" );
        // listOfJokes.innerHTML += `<li>${ joke.value }</li>`;
        // userInputField.value = "";


        /* ------------------------------------ */
        // Veilige manier:
        /* ------------------------------------ */
        const listItem = document.createElement( "li" );
        listItem.setAttribute( "id", "list-item" );

        listItem.textContent = joke.value;

        listOfJokes.appendChild( listItem );

        userInputField.value = "";

    } );

}

