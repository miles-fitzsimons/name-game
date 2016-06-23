var request = require('superagent')



function getArtistSongs (artistId) {
	// var musicAPI = 'http://api.musixmatch.com/ws/1.1/artist.related.get?artist_id='+artistId+'&page_size=10&page=1&apikey=' + process.env.MUSIC_MATCH_KEY
	var musicAPI = 'http://api.musixmatch.com/ws/1.1/track.get?track_id=11146053&apikey=' + process.env.MUSIC_MATCH_KEY


	// artist.albums.get?artist_id=1039&s_release_date=desc&g_album_name=1
	// artist.related.get?artist_id=56&page_size=2&page=1

	// Never let me down trackid 11146053




	console.log("AAAA", artistId)
	// Another API call
	request.get(musicAPI, function(err, res) {
		if(err) {
			console.log("Get artist songs error-----: ", err)
		}
		else {
			// console.log(res)
			var resText = JSON.parse(res.text)
			console.log(resText.message.body)
			//resText.message.body.artist_list[0].artist.artist_id
			//.body.artist_list[0].artist.artist_id)
		}
	})
}

module.exports = getArtistSongs