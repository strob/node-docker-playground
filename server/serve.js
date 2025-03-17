const express = require('express');
const path = require('path')

const PORT = Number(process.argv[2]);

app = express()

app.use('/', express.static(path.join(__dirname, '..', 'client', 'dist')))

app.get('/code', function (req, res) {
  res.send('result')
})


const server = app.listen(PORT, function(){
  console.log('server is running at %s', server.address().port);
});
