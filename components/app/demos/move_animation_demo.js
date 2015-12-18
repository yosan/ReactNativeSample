/*
 * This is a sample at here.
 * https://facebook.github.io/react-native/docs/animations.html
 */

'user strict';

var React = require('react-native');
var {
  Animated,
  Easing
} = React;

var MoveAnimationDemo = React.createClass({

  getInitialState() {
    return {
      position: new Animated.ValueXY({x: 0, y: 0}),
    }
  },

  render: function() {
    return (
      <Animated.View
        style={{
          height: 200,
          width: 200,
          marginTop: 64,
          backgroundColor: "green",
          transform: this.state.position.getTranslateTransform()
        }}
      />
    );
  },

  componentDidMount: function() {
    Animated.timing(
      this.state.position,
      {
        toValue: {x: 150, y: 150},
        easing: Easing.bounce,
        duration: 1000
      }
    ).start();
  }
});

module.exports = MoveAnimationDemo;
