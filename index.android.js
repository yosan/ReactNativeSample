/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  BackAndroid,
  Navigator,
  ToolbarAndroid,
  View
} = React;
var TopMenu = require('./components/top_menu');

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

var RouteMapper = function(route, navigationOperations, onComponentRef) {
  _navigator = navigationOperations;
  if (route.name === 'top_menu') {
    return (
      <View style={{flex: 1}}>
        <ToolbarAndroid
          actions={[]}
          onIconClicked={navigationOperations.pop}
          style={styles.toolbar}
          titleColor="white"
          title="TopMenu" />
        <TopMenu navigator={navigationOperations} />
      </View>
    );
  }
};

var ReactNativeSample = React.createClass({
  render: function() {
    var initialRoute = {name: 'top_menu'};
    return (
      <Navigator
        style={styles.container}
        initialRoute={initialRoute}
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        renderScene={RouteMapper}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  toolbar: {
    backgroundColor: '#a9a9a9',
    height: 56,
  },
});

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
