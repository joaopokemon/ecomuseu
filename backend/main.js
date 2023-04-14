const express = require('express')


console.log('Iniciando servidor do Ecomuseu');

const app = express()

app.use('/', express.static('www'));

app.get('/api', function (req, res) {
  res.send('Hello World')
})

app.listen(3000);

console.log('\n\nPara acessar o Ecomuseu, va para a URL http://localhost:3000\n\n');
console.log('Servidor Ecomuseu pronto e operacional.')