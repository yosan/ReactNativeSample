'user strict';

var React = require('react-native');
var {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableHighlight,
  Platform,
  StyleSheet
} = React;

var TopMenuItem = React.createClass({
  render: function() {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    }
    return (
      <View>
        <TouchableElement onPress={this.props.onSelect}>
          <View>
            <Text style={styles.container}>
              {this.props.title}
            </Text>
          </View>
        </TouchableElement>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    height: 44,
    marginLeft: 8,
    fontSize: 20
  }
});

module.exports = TopMenuItem;
