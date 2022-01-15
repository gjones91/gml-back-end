const express = require('express');
const cors = require('cors')
const app = express();
const data = require('./data.json')

//Cross-Origin Resource Sharing
app.use(cors())

//host the data held in the '/dat.json' file in the location
///api/guitar-manufacturers
app.get('/api/guitar-manufacturers', (req, res) => {
    res.send(data);
});


// read environment variable called PORT
const port = process.env.PORT || 3002
app.listen(port, () => console.log(`Listening on port ${port}...`))