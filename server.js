const express = require('express');
const reactViews = require('express-react-views');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use('/public', express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

let uname = null;

app.get('/', (req, res) => {
	if (uname != null) {
		res.redirect('/game');
	} else {
		res.redirect('/signup');
	}
});

app.get('/game', (req, res) => {
	res.render('game');
});

app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, '/views', 'login.html'));
});

app.listen(port);
