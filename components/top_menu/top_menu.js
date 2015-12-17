'user strict';

var React = require('react-native');
var {
  Text
} = React;
var NavigationBar = require('../common/navigation_bar/navigation_bar');
var TopMenuList = require('./top_menu_list');

var TopMenu = React.createClass({
  render: function() {
    initialRoute={
      title: "TopMenu",
      component: TopMenuList
    }
    return <NavigationBar initialRoute={initialRoute} />
  }
});

module.exports = TopMenu;
