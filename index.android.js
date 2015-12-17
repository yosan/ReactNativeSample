/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry
} = React;
var TopMenu = require('./components/top_menu/top_menu');

var ReactNativeSample = React.createClass({
  render: function() {
    return (
      <TopMenu />
    );
  }
});

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
