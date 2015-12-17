'user strict';

var React = require('react-native');
var {
  Text,
  Platform,
  StyleSheet
} = React;

var TopMenu = React.createClass({
  render: function() {
    return <Text style={styles.container}>Hello!</Text>
  }
});

const MARGIN_TOP_IOS = 64;
const MARGIN_TOP_ANDROID = 0;
var styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? MARGIN_TOP_IOS : MARGIN_TOP_ANDROID
  }
});

module.exports = TopMenu;
