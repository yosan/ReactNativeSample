'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;

var NavigationBar = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={initialRoute}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

module.exports = NavigationBar;
