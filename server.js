'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const path = require('path');
const request = require('request');
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

var links = [{id: 1,name: 'one piece',url: 'http://www.japscan.com/lecture-en-ligne/one-piece/820/',image: '/image/onepiece.jpg'}
,{id: 2,name: 'uq holder',url: 'http://www.japscan.com/lecture-en-ligne/uq-holder/116/',image: '/image/uqholder.png'}
, {id: 3,name: 'nanatsu no taizai',url: 'http://www.japscan.com/lecture-en-ligne/nanatsu-no-taizai/167/',image: '/image/nantsunotaizai.jpg'}
, {id: 4,name: 'berserk',url: 'http://www.japscan.com/lecture-en-ligne/berserk/343/1.html',image: '/image/berserk.jpg'}];

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

// setup routes
server.route({
  method: 'GET',
  path: '/api/proxy',
  handler: function(req, reply){
    request({
      method: 'GET',
      url: req.query.url
    }, function(err, response, body){
      if(err){
        return reply(err);
      }

      reply(body);
    })
  }
});

// listen
server.start((err) => {

  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
