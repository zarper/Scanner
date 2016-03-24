const $ = require('jquery');
const angular = require('angular');
const ReactDOM = require('react-dom');
const React = require('react');
const parser = require('rss-parser');

const Link = require('./component/LinkComponent.jsx');
const Formup = require('./component/LinkComponentupperform.jsx');
const Formdown = require('./component/LinkComponentdownform.jsx');
//const ScanButton = require('./component/LinkComponentformbutton.jsx');
const MangaSelection = require('./component/mangaSelection.jsx');
const ScanSelection = require('./component/ScanSelection.jsx');

parser.parseURL('http://www.reddit.com/.rss', function(err, parsed) {
  console.log(parsed.feed.title);
  parsed.feed.entries.forEach(function(entry) {console.log(entry.title + ':' + entry.link);})
});


function render(data){
  ReactDOM.render(
    <div>

        <Formup action="./sender.js"
        Text1='Lien des flux rss'
        Text2='Liste des mangas'/>
        <MangaSelection links={data} />
        <Formdown
        Text3='Text3 test'
        text4='Tri par'/>
        <ScanSelection links={data} />

    </div>

    //<Link url='http://127.0.0.1:3000/dist/js/' data='' description='Le lien vers la page de test' />
    ,document.getElementById('appcontainer'));

}

// display the app with nothing inside
render([]);

$.get('/api/links').then(function(links) {
  render(links);
});
