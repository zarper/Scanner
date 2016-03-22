'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const path = require('path');
server.connection({
  port: 3000
});


// register plugins
server.register(require('inert'), (err) => {

});


// route vers le fichier index.html de dist
server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: path.resolve(__dirname, './dist')
    }
  }
});

// route qui permet de récupérer les info de la page
server.route({
  method: 'GET',
  path: '/api/links',
  handler: function(request, reply){
    reply(links);
  }
});

// route qui permet de modifier la page en cour pour lui ajouter des liens
server.route({
  method: 'POST',
  path: '/api/links',
  handler: function(request, reply){
    console.log(request.payload);
    links.push(request.payload);
    reply().code(201);
  }
});

// listen
server.start((err) => {

  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
