//
// get the system platform using node.js
	//var os = require('os')
	//document.write('Our computer is: ', os.platform())
	//var osName = os.platform()
/*
	const express = require('express')
	const app = express()
	const port = 3000
	const gui = require('nw.gui')
*/
	const onOpenDoctorApp = function(){
		//gui.Window.open(`http://localhost:${port}`, {
		gui.Window.open('https://doctor.findhealth.today/', { "width": 800, "height": 600 })
	}
	const onOpenPatientApp = function(){
		gui.Window.open('https://letme.findhealth.today/', { "width": 1000, "height": 600 })
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
	//
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
	//
	$('#btnStartServer').on('click', onStartServer)
	$('#btnStopServer').on('click', onStopServer)
})