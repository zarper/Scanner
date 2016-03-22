const React = require('react');

module.exports = React.createClass({
 displayName: 'Link',
 render: function() {
   return (
     <div className="link">
      {
      this.props.links.map((links))
      }
     </div>
   );
 }
});
