const express = require('express');
const reactViews = require('express-react-views');
const intermed = import('./exvars/intermed.mjs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use('/public', express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

// TODO: Add other file 'signup.js' that signup.html links to so i can import intermed easily

app.get('/', (req, res) => {
	if (intermed.uname != null) {
		console.log(uname + ' just came from ' + req.path + ' and is headed to /game');
		res.redirect('/game');
	} else {
		console.log('A new player just came from ' + req.path + ' and is headed to /signup');
		res.redirect('/signup');
	}
});

app.get('/game', (req, res) => {
	res.render('game');
});

app.get('/signup', (req, res) => {
    intermed.ores = res;
	res.sendFile(path.join(__dirname, '/views', 'signup.html'));
});

app.listen(port);
