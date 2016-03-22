const React = require('react');

var listemanga = [{id: 1,name: 'one piece'}, {id: 2,name: 'uq holder'}, {id: 3,name: 'nanatsu no taizai'}, {id: 4,name: 'berserk'}];
function selection(arr){
  var obj = {};
  arr.forEach(function(item){
    obj[item.id] = '<option value=' + item.id + '>' + item.name + '</option>';
  });
  return obj;
}


module.exports = React.createClass({
 displayName: 'mangas',
 render: function() {
   return (

   );
 }
});
