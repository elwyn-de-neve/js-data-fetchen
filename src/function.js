/*// Async & Await worden altijd samen gebruikt
async function fetchRandomJoke() {
    // console.log('Script is running!');
    try {
        // Request naar een specifieke endpoint
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        console.log( response.data.value );

    } catch ( e ) {   // Catch vangt automatisch de error af
        console.error( e )
    }
}

fetchRandomJoke();

async function fetchJokeByCategory( category ) {
    // console.log('Script is running!');
    try {
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
        console.log( response.data.value );
    } catch ( e ) {
        console.error( e );
    }
}

fetchJokeByCategory('sport');*/