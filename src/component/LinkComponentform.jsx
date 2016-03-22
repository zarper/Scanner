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
            {this.props.Text1}
            <div>
              <input type="text" name="info" id="s1" />
            </div>
            <a href="{this.props.Lien1}"><img className="plus" src="http://www.icone-png.com/png/30/29948.png"  height="35" width="35"/></a>
            <br/>
            <br/>
            <br/>
         </td>
       </tr>
       <tr>
         <td>
         {this.props.text2}
           <div>
             <select>
               <option value="option1">option 1</option>
               <option value="option2">option 2</option>
               <option value="option3">option 3</option>
             </select>
           </div>
           <br/>
           <br/>
           <br/>
         </td>

         <td>
         {this.props.text2}
           <div>
           <div>
           <select>
           {this.props.listbox}
           </select>
           </div>
           </div>
           <a href="{this.props.lien1}"><img className="plus" src="http://www.icone-png.com/png/30/29948.png"  height="35" width="35"/></a>
           <br/>
           <br/>
           <br/>
         </td>
       </tr>
       {this.props.text4}
       <tr>
         <td>
           Tri par manga :<input type="radio" name="tri" id="b1" value="manga" />&nbsp;&nbsp;&nbsp;
           Tri par site :<input type="radio" name="tri" id="b2" value="site" />&nbsp;&nbsp;&nbsp;
           Tri par date :<input type="radio" name="tri" id="b3" value="date" />
         </td>
       </tr>
       </tbody>
       </table>
       <table id='table2'>
       <tbody>
       <tr>
         <td>
           <a><input type="button" id="b4" /></a>
           <input type="button" id="b5" />
           <input type="button" id="b6" />
           <input type="button" id="b7" />
           <input type="button" id="b8" />
         </td>
         <td>
           <input type="button" id="b9" />
           <input type="button" id="b10" />
           <input type="button" id="b11" />
           <input type="button" id="b12" />
           <input type="button" id="b13" />
         </td>
       </tr>
       </tbody>
       </table>
       <input type="submit" id="b14" />
       </form>

   );
 },

 onSubmit: function(e){
   e.preventDefault();

   /*var listemanga = [{id: 1,name: 'one piece'}, {id: 2,name: 'uq holder'}, {id: 3,name: 'nanatsu no taizai'}, {id: 4,name: 'berserk'}];
     var obj = {};
     listemanga.forEach(function(item){
       obj[item.id] = '<option value=' + item.id + '>' + item.name + '</option>';
     });
     return obj;*/

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
