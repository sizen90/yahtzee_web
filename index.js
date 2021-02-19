const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.use('/', express.static('.'));
app.listen(PORT, ()=>console.log('app listen on port '+PORT))
