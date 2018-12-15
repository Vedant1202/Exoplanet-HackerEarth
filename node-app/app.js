var express = require('express'),
    app     = express(),
    ip      = process.env.IP || null
    port    = process.env.PORT || 4050;


//set default files to ejs only
app.set('view engine', 'ejs');

//setup express
app.use(express.static(__dirname + '/views'));

//=======================================================================//
//------------------------------ Routes ---------------------------//
//======================================================================//

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/visuals', (req, res) => {
  res.render('visuals');
});


//=======================================================================//
//------------------------------ Setup Server ---------------------------//
//======================================================================//

app.listen(port, ip, () => {
  console.log("Exoplanet server has started on port: 4050");
});
