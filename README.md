# liri-node-app
LIRI is a Language Interpretation and Recognition Interface
Liri is a command line node app that takes specific peramitiers and returns different information depending on the search term used.

## Setup
LIRI requires the following js libraries to funciton:

1. Node-Spotify-API
   - You will also need your own Spotify API key. It can be requested here
2. Axios
   - Axios is used for the API calls for both the Bands in Town and OMDB APIs
3. Moment
   - Moment is used to dipslay the showtimes correctly for the Bands in Town API
4. DotEnv

## Commands
- ```node app.js concert-this <artist/band name>```

  You are able to add whichever artist or band that you would like to see into this search. If the search sucessfully finds the band, you will see the following:
  - Name of venue
  - Venue location
  - Date of the event

- ```node app.js spotify-this-song <song name here>```

  Enter the title of a song you would like to learn more about. If the search is sucessful, you will see the following information:
  - Artist(s)
  - The song's name
  - A preview link of the song from Spotify
  - The album that the song is from
  
- ```node app.js movie-this <movie name here>```

  Enter the title of a movie you want to hear more about. If the movie is found through OMDB, you will see the following:
  - Title
  - Year the movie came out
  - IMDB Rating
  - Rotten Tomatoes Rating
  - Country movie was produced
  - Languages Available
  - Movie Plot
  - Actors in the movie
  
- ```node app.js do-what-it-says```

  This command will have node read the included "random.txt" file and run it through the program.
  
## Preview
  A preview of the app can be found on [GitHub Pages](https://kknosala.github.io/liri-node-app/)
