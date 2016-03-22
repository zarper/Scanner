const $ = require('jquery');
const angular = require('angular');
const ReactDOM = require('react-dom');
const React = require('react');
const parser = require('rss-parser');

const Link = require('./component/LinkComponent.jsx');
const Form = require('./component/LinkComponentform.jsx');
const MangaSelection = require('./component/mangaSelection.jsx');

parser.parseURL('https://www.japscan.com/rss/', function(err, parsed) {
  console.log(parsed.feed.title);
  parsed.feed.entries.forEach(function(entry) {console.log(entry.title + ':' + entry.link);})
});


function render(data){
  ReactDOM.render(
    <div>
        <Form action="./sender.js"
        Text1='Lien des flux rss'
        text2='Liste des mangas'
        Text4='textbox4'
        lien1="http://www.google.fr" />
        <MangaSelection links={data} />
    </div>

    //<Link url='http://127.0.0.1:3000/dist/js/' data='' description='Le lien vers la page de test' />
    ,document.getElementById('appcontainer'));

}

// display the app with nothing inside
render([]);

$.get('/api/links').then(function(links) {
  render(links);
});
