var LIRI = require('./liri');
var fs = require("fs");

var liri = new LIRI();

var search = process.argv[2];
var term = process.argv.splice(3).join(' ');

if(search === 'concert-this'){
    liri.concertThis(term);
}else if(search === 'spotify-this-song'){
    if(!term){
        term = 'The Sign';
    }
    liri.spotify(term);
}else if(search ==='movie-this'){
    if(!term){
        term = 'Mr. Nobody';
    }
    liri.movieSearch(term);
}else if(search === 'do-what-it-says'){

    fs.readFile("random.txt", "utf8", function(error, data){
        if(error){
            console.log(error);
        }

        var dataInfo = data.split(',');
        search = dataInfo[0];
        term = dataInfo[1];

        if(search === 'concert-this'){
            liri.concertThis(term);
        }else if(search === 'spotify-this-song'){
            liri.spotify(term);
        }else if(search ==='movie-this'){
            liri.movieSearch(term);
        }
    })
}