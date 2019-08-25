var LIRI = require('./liri');

var liri = new LIRI();

var search = process.argv[2];
var term = process.argv.splice(3).join(' ');

if(search === 'concert-this'){
    console.log(`\nSearching for Upcoming Concerts for ${term}\n`);
    liri.concertThis(term);
}