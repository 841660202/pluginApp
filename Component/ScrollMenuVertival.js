'use strict'

import React, {
  Component
} from 'react';

import ReactNative, {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

class ScrollingMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      widths: new Array(props.items.length+10),//存储字的宽度
      contentWidth: 10
    }
  }

  scroll(itemNum) {
    let widthInFront = 10,
      currentItemWidth = this.state.widths[itemNum],//选中当前项目的宽度
      screenWidth = Dimensions.get('window').height,//获取窗口的宽度
      contentWidth = this.state.contentWidth,//获取内容的宽度
      self = this//存储this
    console.info('widthInFront ' + widthInFront)
    console.info('currentItemWidth ' + currentItemWidth)
    console.info('screenWidth ' + screenWidth)
    console.info('contentWidth ' + contentWidth)
    console.info('itemNum ' + itemNum)
    for (let i = 0; i <= itemNum; i++) {
      console.info(' this.state.widths[i] ' + this.state.widths[i])
      console.info(' this.props.itemSpacing ' + this.props.itemSpacing)
      if (i < itemNum) widthInFront += this.state.widths[i] + this.props.itemSpacing// 左边距
    }

    window.requestAnimationFrame(
      () => {
        console.info(widthInFront)
        let y = (widthInFront + self.props.itemSpacing) - ((screenWidth / 2) - (currentItemWidth / 2))
        console.info(y)
        if (y < 0) {//前面几个不滚动
          y = 0
        } else if (y > (contentWidth - screenWidth)) {//后面几个不滚动
          y = contentWidth - screenWidth
          console.info(" contentWidth - screenWidth " + y)
        }
        //怎么滚
        console.info("noSetState " + self.props.noSetState)
        if (self.props.noSetState) {

          if (self.props.noSetState.indexOf(self.props.items[itemNum]) === -1) {
            self.refs.scrollView.scrollTo({ y })
            self.setState({ selected: itemNum })
          }
        } else {
          //  //没设置默认选中直接滚
          self.refs.scrollView.scrollTo({ y:100 })
          self.setState({ selected: itemNum })
        }
      }
    )

    this.props.callback(itemNum)//回调到父组件
  }

  render() {
    //样式设置
    let styles = StyleSheet.create({
      scrollBar: {
        backgroundColor: this.props.backgroundColor,
        width:70,
        borderRightWidth:1,
      },
      //导航条每个按钮
      scrollBarItem: {
        color: this.props.textColor,
        marginRight: this.props.itemSpacing,
        // backgroundColor: 'green',
        padding: 18,
        fontSize: 12,

      },
      //第一个的左外边距
      scrollBarFirstItem: {
        marginLeft: this.props.itemSpacing
      },
      //选中
      scrollBarSelectedItem: {
        color: this.props.selectedTextColor,
        fontSize: 22,
        padding: 11,
      }, button: {

      }
    })
    //子目录产生 组件函数
    let items = []
    for (let i = 0; i <= this.props.items.length; i++) {
      items.push(
        <TouchableOpacity
          key={i}
          style={styles.button}
          onPress={() => { this.scroll(i) }}
        >
          <Text style={[i === 0 ? styles.scrollBarFirstItem : null, styles.scrollBarItem, this.state.selected === i ? styles.scrollBarSelectedItem : null]}
            onLayout={(object) => {
              let { width } = object.nativeEvent.layout
              let newState = this.state
              newState.widths[i] = width
              this.setState(newState)
            }}
          >
            {this.props.items[i]}
          </Text>
        </TouchableOpacity>
      )
    }
    //返回Dom
    return (
      //主要载体ScrollView
      <View>
        <ScrollView
          ref='scrollView'
          style={styles.scrollBar}
          //horizontal={false}
          showsVerticalScrollIndicator={false}
        >
          {items}
        </ScrollView>


        {this.props.children}
      </View>
    )
  }
}

ScrollingMenu.propTypes = {
  items: React.PropTypes.array.isRequired,
  callback: React.PropTypes.func.isRequired,
  backgroundColor: React.PropTypes.string,
  textColor: React.PropTypes.string,
  selectedTextColor: React.PropTypes.string,
  itemSpacing: React.PropTypes.number
}

ScrollingMenu.defaultProps = {
  backgroundColor: "#ffffff",
  textColor: "#cccccc",
  selectedTextColor: "#000000",
  itemSpacing: 20
}

module.exports = ScrollingMenu