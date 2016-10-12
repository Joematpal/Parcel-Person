const express = require('express');
const app = express();

const port = 5003;

app.use(express.static(`${__dirname}`))
app.listen(port)
