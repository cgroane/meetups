const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const groupCtrl = require('./controllers/groupInfoController');

app.get('/api/react-group', groupCtrl.getReactJSInfo);
app.get('/api/react-group/:eventID', groupCtrl.getRSVPs);
app.post('/api/places', groupCtrl.getPlaces);

const port = process.env.PORT || 3001;


app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})
