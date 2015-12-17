'user strict';

var React = require('react-native');
var {
  Text,
  Platform,
  StyleSheet,
  ListView,
  View
} = React;
var TopMenuItem = require('./top_menu_item');
var SingleViewDemo = require('../single_view_demo/single_view_demo');
var AnimatedDemo = require('../animated_demo/animated_demo');

var MENU_ITEMS = [
  {
    title: "Single View Demo",
    component: SingleViewDemo
  },
  {
    title: "Animated Demo",
    component: AnimatedDemo
  }
];

var TopMenuList = React.createClass({

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    return {
      dataSource: ds.cloneWithRows(MENU_ITEMS)
    }
  },

  render: function() {
    return (
      <ListView
        renderSeparator={this.renderSeparator}
        dataSource={this.state.dataSource}
        renderFooter={this.renderFooter}
        renderRow={this.renderRow}
        automaticallyAdjustContentInsets={true}
        showsVerticalScrollIndicator={true}
      />
    );
  },

  renderSeparator: function(sectionID: number | string, rowID: number | string, adjacentRowHighlighted: boolean) {
    var style = styles.rowSeparator;
    if (adjacentRowHighlighted) {
        style = [style, styles.rowSeparatorHide];
    }
    return (
      <View key={'SEP_' + sectionID + '_' + rowID} style={style} />
    );
  },

  renderFooter: function() {
    return <Text style={styles.footer}>Enjoy ReactNative!</Text>
  },

  renderRow: function(
    item: Object,
    sectionID: number | string,
    rowID: number | string,
    highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void,
  ) {
    return (
      <TopMenuItem
        key={'ITEM_' + sectionID + '_' + rowID}
        item={item}
        onSelect={() => this.selectItem(item)}
      />
    );
  },

  selectItem: function(item: Object) {
    this.props.navigator.push({
      title: item.title,
      component: item.component,
      passProps: {title: item.title},
    });
  },

});

var styles = StyleSheet.create({
  rowSeparator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1,
    marginLeft: 4,
  },
  rowSeparatorHide: {
    opacity: 0.0,
  },
  footer: {
    textAlign: 'center',
    marginTop: 10
  }
});

module.exports = TopMenuList;
