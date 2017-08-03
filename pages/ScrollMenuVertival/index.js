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

import ScrollMenuVertival from '../../Component/ScrollMenuVertival'

const items = ['关注', '推荐', '热点', '视频', '南京', '社会', '问答', '图片', '娱乐', '科技',
    '汽车', '财经', '军事', '体育', '段子', '美女', '国际', '趣图', '健康', '特卖', '房产'];
const { width, height } = Dimensions.get('window');


export default class ScrollMenuVertical extends Component {
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
    render() {
        return (
            <View>
                <StatusBar

                    backgroundColor="rgba(0,0,0,0)"
                    barStyle="dark-content"
                    translucent={true}
                />
                <ScrollMenuVertival
                    items={items}
                    callback={this.onClick.bind(this)}
                    backgroundColor="#ffffff"
                    textColor="#cccccc"
                    selectedTextColor="#FF0000"
                    itemSpacing={0} />
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

