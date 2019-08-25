require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");

var LIRI = function() {
  this.concertThis = function(artist) {
    var URL =
      "https://rest.bandsintown.com/artists/" +
      artist +
      "/events?app_id=codingbootcamp";

    axios.get(URL).then(function(response) {
      var jsonData = response.data;
      console.log(`\nSearching for Upcoming Concerts for ${artist}\n`);

      for (i = 0; i < jsonData.length; i++) {
        console.log(`Venue: ${jsonData[i].venue.name}`);
        console.log(
          `Located in ${jsonData[i].venue.city} ${jsonData[i].venue.region}`
        );
        console.log(`On: ${moment(jsonData[i].datetime).format("MM/DD/YYYY")}`);
        console.log("----------------\n");
      }
    });
  };

  this.spotify = function(song) {
    var spotify = new Spotify(keys.spotify);

    spotify.search({ type: "track", query: song }, function(err, data) {
      if (err) {
        return console.log("Error occurred: " + err);
      }
      var tracks = data.tracks.items;
      console.log(`\nSearching for the track "${song}"\n`);
      for (i = 0; i < tracks.length; i++) {
        artistArry = [];

        for (j = 0; j < tracks[i].artists.length; j++) {
          artistArry.push(tracks[i].artists[j].name);
        }
        console.log(`Artist(s): ${artistArry.join(", ")}`);
        console.log(`Song Name: ${tracks[i].name}`);
        console.log(`Preview Link: ${tracks[i].preview_url}`);
        console.log(`Album: ${tracks[i].album.name}`);
        console.log("----------------\n");
      }
    });
  };

  this.movieSearch = function(movie) {
    var URL =
      "https://www.omdbapi.com/?apikey=trilogy&t=" + movie + "&plot=short";

    axios.get(URL).then(function(response) {
      var movieInfo = response.data;
      console.log(`\nSearching for the moive "${movie}"\n`);
      console.log(`Title: ${movieInfo.Title}\n`);
      console.log(`Year: ${movieInfo.Year}\n`);
      console.log(`IMDB Rating: ${movieInfo.imdbRating}\n`);
      console.log(`Rotten Tomatoes Rating: ${movieInfo.Ratings[1].Value}\n`);
      console.log(`Country: ${movieInfo.Country}\n`);
      console.log(`Plot:\n ${movieInfo.Plot}\n`);
      console.log(`Actor(s): ${movieInfo.Actors}\n`);
      console.log("----------------\n");
    });
  };
};

module.exports = LIRI;
