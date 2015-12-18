'user strict';

var React = require('react-native');
var {
  Text,
  StyleSheet,
  View
} = React;

var SingleViewDemo = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Single View Demo!!</Text>
        <View style={styles.colored} />
        <View style={styles.rotated} />
        <View style={styles.skewed} />
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64
  },
  colored: {
    height: 80,
    width: 100,
    backgroundColor: "blue"
  },
  rotated: {
    height: 80,
    width: 100,
    backgroundColor: "yellow",
    alignSelf: "center",
    transform: [
      {rotate: "45deg"}
    ]
  },
  skewed: {
    height: 80,
    width: 100,
    backgroundColor: "green",
    transform: [
      {skewX: "30deg"}
    ]
  }
});


module.exports = SingleViewDemo;
