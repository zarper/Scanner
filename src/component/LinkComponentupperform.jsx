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
          <br/><br/><br/>
        </td>
      </tr>
      <tr>
        <td>{this.props.Text2}
        </td>
      </tr>
    </tbody>
  </table>
</form>);
}});
