// Stock market Portfolio App

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;

//Set Handlebars Middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

const otherStuff = "Hello. This is other stuff."

//Set Handlebar routes
app.get('/', (req, res) => {
    res.render('home', {
    	stuff: otherStuff
    });
});

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server Listening on port ' + PORT));

