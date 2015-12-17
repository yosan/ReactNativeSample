/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry
} = React;
var NavigationBar = require('./components/navigation_bar/navigation_bar');
var TopMenu = require('./components/top_menu');

var ReactNativeSample = React.createClass({
  render: function() {
    return (
      <NavigationBar rootTitle="TopMenu" rootComponent={TopMenu} />
    );
  }
});

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
