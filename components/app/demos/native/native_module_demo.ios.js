'user strict';

var React = require('react-native');
var {
  Text,
  StyleSheet
} = React;
var MyNativeModule = require('react-native').NativeModules.MyNativeModule;

var NativeModuleDemo = React.createClass({
  render: function() {
    console.log(MyNativeModule);
    return (
      <Text style={styles.container}>{MyNativeModule.helloNative()}</Text>
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
