const $ = require('jquery');
const angular = require('angular');
const ReactDOM = require('react-dom');
const React = require('react');
const parser = require('rss-parser');

const Link = require('./component/LinkComponent.jsx');
const Form = require('./component/LinkComponentform.jsx');

parser.parseURL('https://www.japscan.com/rss/', function(err, parsed) {
  console.log(parsed.feed.title);
  parsed.feed.entries.forEach(function(entry) {console.log(entry.title + ':' + entry.link);})
});


console.log(document.getElementById('appcontainer'));
ReactDOM.render(
  /*html du render*/

  /* Suite du render*/
  <div>
      <Form action="./sender.js" Text1='Lien des flux rss' text2='Liste des mangas' listbox='<option value="option1">option 1</option><option value="option2">option 2</option><option value="option3">option 3</option>' Text4='textbox4'
      lien1="http://www.google.fr" />
  </div>

  //<Link url='http://127.0.0.1:3000/dist/js/' data='' description='Le lien vers la page de test' />
  ,document.getElementById('appcontainer'));

$.get('/api/links').then(function(links) {
  console.log(links);
});
