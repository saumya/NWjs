//
// get the system platform using node.js
	//var os = require('os')
	//document.write('Our computer is: ', os.platform())
	//var osName = os.platform()

	const express = require('express')
	const app = express()
	const port = 3000
	const gui = require('nw.gui')

	const onOpenDoctorApp = function(){
		//gui.Window.open(`http://localhost:${port}`, {
		gui.Window.open('https://doctor.findhealth.today/', { "width": 800, "height": 600 })
	}
	const onOpenPatientApp = function(){
		gui.Window.open('https://letme.findhealth.today/', { "width": 1000, "height": 600 })
	}
	const onOpenShareApp = function(){
		//gui.Window.open('share.html', { "width": 800, "height": 600})
		// current folder 
		/*
		// Windows
		var path = require('path'); 
		path.dirname(process.execPath);
		*/
		// MacOS
		let filePath = global.__dirname + '/app/share.html'
		console.log('filePathath', filePath)
		gui.Window.open( filePath, { "width": 800, "height": 600} )
	}
/*
	const startServer = function(){
		console.log('startServer', new Date().toString())
		app.get('/', (req, res) => res.send('Hello World!'))
		app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
	}
*/
//
//====================== JQuery ======================

$(function(){
	console.log('JQuery : Ready')

	var os = require('os')
	let osName = os.platform()
	$('#info').html(`OS: ${osName} `)

	// Express
	const express = require('express')
	const app = express()
	const port = 3000
	const gui = require('nw.gui')
	
	let my_server = null

	const onStartServer = ()=>{
		console.log( 'onStartServer' )
		app.get('/', (req, res) => res.send('Hello World!'))
		my_server = app.listen(port, () => {
			console.log(`Application listening at http://localhost:${port}`)
			$('#divServerStatus').html( `On : http://localhost:${port}` ) 
		})
		my_server.on('connect', (req, clientSocket, head) => {
			console.log('server : connect')
		})
		my_server.on('close', (req, clientSocket, head) => {
			console.log('server : close')
		})
		my_server.on('error', (req, clientSocket, head) => {
			console.log('server : error')
		})
	}
	const onStopServer = ()=>{
		console.log('onStopServer')
		//$('#divServerStatus').html( `Off` )
		my_server.close( function(){
			console.log('my_server.close')
			$('#divServerStatus').html( `Off` )
		} )
	}
	// Express/
	// WebTorrent
	const onDownloadClick = ()=>{
		console.log('onDownloadClick')

		const path = require('path')

		//console.log('path.basename', path)
		console.log( 'node version', process.version)

		/*
		var WebTorrent = require('webtorrent')
		//console.log( WebTorrent )
		
		var client = new WebTorrent()
		var torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'
		client.add(torrentId, { path: './downloads/' }, function (torrent) {
		//client.add(torrentId, function (torrent) {

			console.log('add:torrent')
			console.log('torrent', torrent)
			console.log( 'torrent.files', torrent.files )

		  // Torrents can contain many files. Let's use the .mp4 file
		  var file = torrent.files.find(function (file) {
		    //return file.name.endsWith('.mp4')
		    return file.name.endsWith('.jpg')
		  })
		  // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
		  //file.appendTo('body')
		  console.log('------ file -----------')
		  console.log( 'file', file )
		  console.log( 'file.name', file.name )
		  console.log( 'file.path', file.path )
		  console.log( 'file.length', file.length )
		  console.log( 'file.downloaded', file.downloaded )
		  console.log('------ file/ -----------')
		  //
		  //$("#imgTagOne").attr("src", file.path)
		  //file.appendTo('imgDiv')
		  //
			file.appendTo('#imgDiv', function (err, elem) {
				if (err){ 
					// file failed to download or display in the DOM
					//throw err 
					console.log('ERROR', err)
				}else{
						console.log('New DOM node with the content', elem) 		
				}
				
			}) // file.appendTo/
		}) // client.add/

		*/

		/*
		client.on('torrent', function (torrent) {
			console.log('----------------------')
			console.log('client : on : torrent')
			//console.log(torrent)
			console.log( 'torrent.name', torrent.name )
			console.log( 'torrent.magnetURI', torrent.magnetURI )
			console.log('----------------------')
			torrent.on('ready', function () {
				console.log('--------- Ready ----------------')
			})
			torrent.on('download', function (bytes) {
				console.log('just downloaded: ' + bytes)
				console.log('download speed: ' + torrent.downloadSpeed)
				console.log('progress: ' + torrent.progress)
			})
		})
		client.on('error', function (err) {
			console.log('----------------------')
			console.log('client : on : error')
			console.log(err)
			console.log('----------------------')
		})
		*/
		
		/*
		if (WebTorrent.WEBRTC_SUPPORT) {
		  console.log('WebTorrent.WEBRTC_SUPPORT : YES')
		} else {
		  console.log('WebTorrent.WEBRTC_SUPPORT : NO')
		}
		*/
		//
		return false
	}
	// WebTorrent/

	// Event handlers
	$('#btnStartServer').on('click', onStartServer)
	$('#btnStopServer').on('click', onStopServer)
	$('#btnDownloadTest').on('click', onDownloadClick)
})