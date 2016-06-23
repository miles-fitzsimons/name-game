var Discogs = require('disconnect').Client;

// var db = new Discogs().database();
// db.getRelease(176126, function(err, data){
//     console.log(data);
// });


var a,b,c



// // var express = require('express')  //Not pushing to browser yet
// // app = express()
// // var agent = require('superagent-promise')(require('superagent'), Promise)
// var dotenv = require('dotenv')
// dotenv.load()
var request = require('superagent')
// var getArtistId = require('./lib/get-artist-id')
// var getArtistSongs = require('./lib/get-artist-songs')
// var Promise = require('promise')

request
	.get('http://api.fixer.io/latest?base=USD&symbols=GBP')
	.end(function(err, res) {
		resText = JSON.parse(res.text)
		console.log(resText.rates.GBP)
		a = resText.rates.GBP

		request
	.get('http://api.fixer.io/latest?base=GBP&symbols=NZD')
	.end(function(err, res) {
		resText = JSON.parse(res.text)
		console.log(resText.rates.NZD)
		b = resText.rates.NZD

		request
	.get('http://api.fixer.io/latest?base=NZD&symbols=USD')
	.end(function(err, res) {
		resText = JSON.parse(res.text)
		console.log(resText.rates.USD)
		c = resText.rates.USD
		console.log("AAA", a,b,c, a*b*c)
	})



	})






	})
// request
// 	.get('http://api.fixer.io/latest?base=GBP&symbols=NZD')
// 	.end(function(err, res) {
// 		resText = JSON.parse(res.text)
// 		console.log(resText.rates.NZD)
// 		b = resText.rates.NZD
// 	})
// request
// 	.get('http://api.fixer.io/latest?base=NZD&symbols=USD')
// 	.end(function(err, res) {
// 		resText = JSON.parse(res.text)
// 		console.log(resText.rates.USD)
// 		c = resText.rates.USD
// 	})

	// console.log(a,b,c,a*b*c)

// var artistName = 'kanye'
// var musicAPI = 'http://api.musixmatch.com/ws/1.1/artist.search?q_artist='+artistName+'&page_size10&apikey=' + process.env.MUSIC_MATCH_KEY


// var promise = new Promise(function (resolve, reject) {
//   request.get(musicAPI, function (err, res) {
//     if (err) reject(err);
//     else resolve(res);
//   });
// });

// promise
// 	.then(getArtistId)
// 	// Get list of artist songs
// 	.then(function(artistId) {
// 		console.log(artistName, artistId)
// 		return artistId
// 	})
// 	.then(getArtistSongs)
// 	.catch(function(err) {
// 		console.log("Promise error! It is-----: ", err)
// 	})



