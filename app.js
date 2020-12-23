const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.port || 3000;

app.use(cors())

app.get('/', (req, res) => {
    res.send("Front End");
});

app.get('/api/test', (req, res) => {
    res.send("test api endpoint!");
});

app.listen(port, () => {
    console.log("listening on port: " + port);
})

