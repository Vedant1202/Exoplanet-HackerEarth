var express = require('express'),
    app     = express();


//set default files to ejs only
app.set('view engine', 'ejs');

//setup express
app.use(express.static(__dirname + '/views'));

console.log(__dirname + '/views');

//=======================================================================//
//------------------------------ Routes ---------------------------//
//======================================================================//

app.get('/', (req, res) => {
  res.render('landing');
});


//=======================================================================//
//------------------------------ Setup Server ---------------------------//
//======================================================================//

app.listen(4050, () => {
  console.log("Exoplanet server has started on port: 4050");
});