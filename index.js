const express = require('express');
const app = express();
const PORT = 8080;

app.use('/', express.static('./web'));
app.listen(PORT, ()=>console.log('app listen on port 8080'))
