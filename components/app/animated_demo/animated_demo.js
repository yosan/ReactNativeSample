/*
 * This is a sample at here.
 * https://facebook.github.io/react-native/docs/animations.html
 */

'user strict';

import React from 'react-native';
var {
  Animated
} = React;

class AnimatedDemo extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }
  render(): ReactElement {
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
  }
  componentDidMount() {
    this.state.bounceValue.setValue(1.5);
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 0.8,
        friction: 1,
      }
    ).start();
  }
}

module.exports = AnimatedDemo;
