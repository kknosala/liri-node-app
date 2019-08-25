require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");

var LIRI = function(){

    this.concertThis = function(artist){
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

        axios.get(URL).then(function(response){

            var jsonData = response.data;
            for(i = 0; i < jsonData.length; i++){
                console.log(`Venue: ${jsonData[i].venue.name}`);
                console.log(`Located in ${jsonData[i].venue.city} ${jsonData[i].venue.region}`);
                console.log(`On: ${moment(jsonData[i].datetime).format('MM/DD/YYYY')}`);
                console.log('----------------\n')
            }
        })
    }

    this.spotify = function(){

        
    }



}

module.exports = LIRI;