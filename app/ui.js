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

	const onStartServer = ()=>{
		console.log( 'onStartServer' )
		app.get('/', (req, res) => res.send('Hello World!'))
		app.listen(port, () => {
			console.log(`Example app listening at http://localhost:${port}`)
			$('#divServerStatus').html( `Server running at : http://localhost:${port}` ) 
		})
	}
	const onStopServer = ()=>{
		console.log('onStopServer')
	}
	//
	$('#btnStartServer').on('click', onStartServer)
	$('#btnStopServer').on('click', onStopServer)
})