'user strict';

var React = require('react-native');
var {
  Text,
  StyleSheet
} = React;

var NativeModuleDemo = React.createClass({
  render: function() {
    return (
      <Text style={styles.container}>Hello Native!!</Text>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64
  }
});

module.exports = NativeModuleDemo;
