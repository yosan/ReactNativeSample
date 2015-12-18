/*
 * This is a sample at here.
 * https://facebook.github.io/react-native/docs/animations.html
 */

'user strict';

var React = require('react-native');
var {
  Animated
} = React;

var SpringAnimationDemo = React.createClass({

  getInitialState() {
    return {
      bounceValue: new Animated.Value(0)
    }
  },

  render: function() {
    return (
      <Animated.Image
        source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
        style={{
          flex: 1,
          transform: [
            {scale: this.state.bounceValue},
          ]
        }}
      />
    );
  },

  componentDidMount: function() {
    this.state.bounceValue.setValue(1.5);
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 0.8,
        friction: 1,
      }
    ).start();
  }
});

module.exports = SpringAnimationDemo;
