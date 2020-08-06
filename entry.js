//
// nw.Window.open('app/index.html', {}, function(win) {});
nw.Window.open('app/index.html', {
	width: 300, 
	height: 600,
	title: 'My Web FindHealth',
	frame: true,
	resizable: false
}, function(win) {
	win.showDevTools();
});