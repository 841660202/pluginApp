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
// import ReactDOM from 'react-dom'
//scrollBar
const BarPaddingBottomPolyfill = 20;
const BarPaddingTop = 20;
const BarWidth = 80;
class ScrollingMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      widths: new Array(props.items.length+10),//存储字的宽度
      contentHeight: 0
    }
  }

  scroll(itemNum) {
    console.info("----------------------------------")
    // console.info(Dimensions.get(this.refs.item).height)
    let heightInFront = 80,
      currentItemHeight =50,//选中当前项目的宽度
      screenHeight = Dimensions.get('window').height,//获取窗口的宽度
      contentHeight = this.state.contentHeight,//获取内容的宽度
      self = this//存储this
    console.info('heightInFront ' + heightInFront)
    console.info('currentItemHeight ' + currentItemHeight)
    console.info('screenHeight ' + screenHeight)
    console.info('contentHeight ' + contentHeight)
    console.info('itemNum ' + itemNum)
    for (let i = 0; i <= itemNum; i++) {
      console.info(' this.state.widths[i] ' + this.state.widths[i])
      console.info(' this.props.itemSpacing ' + this.props.itemSpacing)
      if (i < itemNum) heightInFront += 50 + this.props.itemSpacing+BarPaddingTop/4// 左边距
    }

    window.requestAnimationFrame(
      () => {
        console.info('heightInFront '+heightInFront)
        let y =  (heightInFront + self.props.itemSpacing) -((screenHeight / 2) - (currentItemHeight / 2))
        console.info(y)
        if (y < 0) {//前面几个不滚动
          y = 0
        }
        //  else if (y > (contentHeight - screenHeight)) {//后面几个不滚动
        //    y = contentHeight - screenHeight
        //   console.info(" contentHeight - screenHeight " + y)
        // }
        //怎么滚
        console.info("noSetState " + self.props.noSetState)
        if (self.props.noSetState) {

          if (self.props.noSetState.indexOf(self.props.items[itemNum]) === -1) {
            self.refs.scrollView.scrollTo({ y:y })
            self.setState({ selected: itemNum })
          }
        } else {
          //  //没设置默认选中直接滚
          self.refs.scrollView.scrollTo({ y:y })
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
        paddingTop:BarPaddingTop,
        // paddingBottom:BarPaddingBottom,
        backgroundColor: this.props.backgroundColor,
        width:BarWidth,
        // borderRightWidth:1,
      },
      //导航条每个按钮
      scrollBarItem: {
        color: this.props.textColor,
        marginBottom: this.props.itemSpacing,
        backgroundColor: 'green',
        padding: 18,
        fontSize:16,

      },
      //第一个的左外边距
      scrollBarFirstItem: {
        marginTop: this.props.itemSpacing
      },
      //选中
      scrollBarSelectedItem: {
        color: this.props.selectedTextColor,
        fontSize: 22,
        padding: 11,
      }, button: {

      },polyfillBarItem:{
        height:BarPaddingBottomPolyfill
      }
    })
    //子目录产生 组件函数
    let items = []
    for (let i = 0; i <= this.props.items.length; i++) {
     if(i <this.props.items.length){
        items.push(
        <TouchableOpacity
          ref="item" 
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
      if(i ===this.props.items.length){
        items.push(<Text  key={i} style={styles.polyfillBarItem}> </Text> )
      }
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