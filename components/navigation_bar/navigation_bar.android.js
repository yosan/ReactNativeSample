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
  if (route.component !== undefined){
    var ReceivedComponent = route.component;
    return (
      <View style={{flex: 1}}>
        <ToolbarAndroid
          actions={[]}
          onIconClicked={navigationOperations.pop}
          style={styles.toolbar}
          titleColor="white"
          title={route.title} />
        <ReceivedComponent navigator={navigationOperations} />
      </View>
    );
  }
};

var NavigationBar = React.createClass({
  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={this.props.initialRoute}
        configureScene={() => Navigator.SceneConfigs.PushFromRight}
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

module.exports = NavigationBar;
