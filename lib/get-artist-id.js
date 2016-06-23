// var dotenv = require('dotenv')
// dotenv.load()
// var request = require('superagent')
// var XXX = 'http://api.musixmatch.com/ws/1.1/artist.get?artist_id=118&apikey=' + process.env.MUSIC_MATCH_KEY

function getArtistId (res) {
	var resText = JSON.parse(res.text)
	return resText.message.body.artist_list[0].artist.artist_id
}

module.exports = getArtistId