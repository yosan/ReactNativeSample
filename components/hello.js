'user strict';

var React = require('react-native');
var {
  Text
} = React;

var Hello = React.createClass({
  render: function() {
    return <Text style={{marginTop: 64}}>Hello!!</Text>
  }
});

module.exports = Hello;
