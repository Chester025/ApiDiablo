var express = require('express');
var app = express();

app.use(express.json())


const bossRoute = require('./routes/Bossesdiablo-routes');
app.use('/api/bosses', bossRoute);



app.listen(3000, () => console.log('Listening on port 3000') );