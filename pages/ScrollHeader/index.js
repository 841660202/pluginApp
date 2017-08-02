/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  StatusBar,
} from 'react-native';
import ScrollMenu from '../../Component/ScrollMenu'
import ScrollHeader from '../../Component/scrollHeader'

const { width, height } = Dimensions.get('window');
export default class ScrollHeaderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerO: 0,
      B: false
    }
  }
  onClick(itemIndex) {
    console.log("Selected: " + items[itemIndex]);
  }
  _fun() {
   alert('父组件回调')
  }
  render() {



    return (
      <View>
        <StatusBar

          backgroundColor="rgba(0,0,0,0)"
          barStyle="light-content"
          translucent={true}


        />
        {/* 导航渐变色 */}
        <ScrollHeader
          color0='rgba(0,0,0,0)'
          color1='#2B99FF'
          headerTitle="蚂蚁"
          headerTitleSize={18}
          headerTitleColor="#FFF"
          IconLeft='angle-left'
          IconLeftColor='#000'
          IconLeftColorIsScroll='#FFF'
          IconRight='weixin'
          IconRightColor='#000'
          IconRightColorIsScroll='#FFF'
          size={30}
          distance={width / 2}
          hasStatusBarTranslucent={true}
          callbackRight={this._fun}
        >

      

          <Image source={{
            uri: 'https://i.ytimg.com/vi/P-NZei5ANaQ/maxresdefault.jpg',
            width: width,
            height: height / 2,
          }} />
          <View><Text>3</Text></View>
          <View><Text>3</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>2</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>2</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>2</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>2</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>
          <View><Text>2</Text></View>
          <View><Text>1</Text></View>
          <View><Text>1</Text></View>

        </ScrollHeader>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  headerO: {
    position: 'absolute',
    top: 10,
    backgroundColor: '#fff',
    zIndex: 100,
    fontSize: 50,
  }, headerViewStyle: {
    height: 100,
    width: width,
    padding: 5,
  }
});

