//referenciar o arquivo da aplicacao (main)
const app = require('./app');
//importar dotenv
require('dotenv').config({path: './variables.env' });
//importar mongoose 
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) =>{
    console.error("Erro:"+ error.message);
});
app.set('port', process.env.PORT || 7777);

//inicio do servidor
const server = app.listen(app.get('port'), () =>{
        console.log("Servidor esta rodando na porta"+ server.address().port);
    });
