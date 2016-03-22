const React = require('react');


module.exports = React.createClass({
 displayName: 'mangas',
 // propTypes
 render: function() {
   return (
     <select onChange={maFunc}>
     {
       this.props.links.map((link) => <option key={link.id} value={link.id}>{link.name}</option>)
     }
     </select>
   );
 }
});


function maFunc(e){
  console.log(e.target.value);
}
