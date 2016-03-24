const React = require('react');


module.exports = React.createClass({
 displayName: 'scan',
 // propTypes
 render: function() {
   return (
   <div>
   {
     this.props.links.map((link) =>    <a href={link.url}>
   <button id={link.id} key={link.id} name={link.titre} type="button">
                                      <img src={link.image}  id={link.id}/>
                                      </button></a>)
   }
   </div>
          )
 }});

function maFunc(e){
  console.log(e.target.value);
}
