const React = require('react');
var test = "text de test"



module.exports = React.createClass({
 displayName: 'Form',
 render: function() {
   return (
     <form action={this.onSubmit} method="post" >
     <table>
      <tbody>
       <tr>
          <td>
           <a href="{this.props.lien1}"><img className="plus" src="http://www.icone-png.com/png/30/29948.png"  height="35" width="35"/></a>
           <br/>
         </td>
       </tr>
       <tr>
          <td>
           {this.props.text4}
         </td>
       </tr>
       <tr>
         <td>
           Manga <input type="radio" name="tri" id="b1" value="manga" />&nbsp;&nbsp;&nbsp;
           Site <input type="radio" name="tri" id="b2" value="site" />&nbsp;&nbsp;&nbsp;
           Date <input type="radio" name="tri" id="b3" value="date" />
         </td>
       </tr>
       </tbody>
       </table>
       </form>

   );
 },

 onSubmit: function(e){
   e.preventDefault();

   var listemanga = [{id: 1,name: 'one piece'}, {id: 2,name: 'uq holder'}, {id: 3,name: 'nanatsu no taizai'}, {id: 4,name: 'berserk'}];
     var obj = {};
     listemanga.forEach(function(item){
       obj[item.id] = '<option value=' + item.id + '>' + item.name + '</option>';
     });
     return obj;

   var link = {
    title: ReactDOM.findDOMNode(this.refs.title).value,
    url: ReactDOM.findDOMNode(this.refs.url).value,
    manga: ReactDOM.findDOMNode(this.refs.manga).value,
    numscan: ReactDOM.findDOMNode(this.refs.numscan).value,
  };

  this.props.onSubmit(link);
  // props.onSubmit
}
});
