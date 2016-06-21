var express = require('express')
app = express()
var dotenv = require('dotenv')
dotenv.load()
var request = require('superagent')


// Set view engine?
app.listen(3000, () => {
	console.log("----Listenting on port 3000----")

})
app.get('/', function(req, res) {
	res.send('hello wffforld!')
})

var searchTerm = 'Kanye'
var musicAPI = 'http://api.musixmatch.com/ws/1.1/track.search?apikey=' + process.env.MUSIC_MATCH_KEY + '&q_artist=queen'

request
	.get(musicAPI)
	.end((err, res) => {
		console.log(err)
		console.log(res)
	})