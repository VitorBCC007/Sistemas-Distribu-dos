//referenciar o arquivo da aplicacao (main)
const app = require('./app');

app.set('port', process.env.PORT || 7777);

//inicio do servidor
const server = app.listen(app.get('port'), () =>{
        console.log("Servidor esta rodando na porta"+ server.address().port);
    });