'user strict';

var React = require('react-native');
var {
  Text
} = React;
var TopMenuList = require('./top_menu_list');

var TopMenu = React.createClass({
  render: function() {
    return <TopMenuList />
  }
});

module.exports = TopMenu;
