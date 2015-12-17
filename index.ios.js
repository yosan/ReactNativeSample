/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;
var TopMenu = require('./components/top_menu');

var ReactNativeSample = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'TopMenu',
          component: TopMenu,
        }}
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

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
