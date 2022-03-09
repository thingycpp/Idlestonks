const express = require('express');
const reactViews = require('express-react-views');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use('/public', express.static('public'));
app.use('/src', express.static('src'));

let uname = null;

app.get('/', (req, res) => {
	if (uname != null) {
		res.redirect('/game');
	} else {
		res.redirect('/login');
	}
});

app.get('/game', (req, res) => {
	res.sendFile(path.join(__dirname, '/views', 'game.html'));
});

app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, '/views', 'login.html'));
});

app.listen(port);
