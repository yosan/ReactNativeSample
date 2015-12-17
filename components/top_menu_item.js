'user strict';

var React = require('react-native');
var {
  Text,
  StyleSheet
} = React;

var TopMenuItem = React.createClass({
  render: function() {
    return <Text style={styles.container}>{this.props.title}</Text>
  }
});

var styles = StyleSheet.create({
  container: {
    height: 44,
    marginLeft: 8,
    fontSize: 20
  }
});

module.exports = TopMenuItem;
