var React = require('react');

var Main = React.createClass({
  render: function() {
    return(
      <div>
        Hello from Me!
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
