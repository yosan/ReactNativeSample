'user strict';

var React = require('react-native');
var {
  Text
} = React;

var SingleViewDemo = React.createClass({
  render: function() {
    return <Text style={{marginTop: 64}}>Single View Demo!!</Text>
  }
});

module.exports = SingleViewDemo;
