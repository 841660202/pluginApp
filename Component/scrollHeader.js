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
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
const { width } = Dimensions.get('window');
export default class ScrollHeader extends Component {
    static defaultProps = {
        color0: 'rgba(0,0,0,0)',
        color1: 'rgba(0,0,0,1)',
        headerTitle: '',
        headerTitleSize: 16,
        headerTitleColor: '#000',
        IconLeft: 'angle-left',
        IconLeftColor: '#000',
        IconLeftColorIsScroll: '#000',
        IconRight: '',
        IconRightColor: '#000',
        IconRightColorIsScroll: '#000',
        size: 30,
        distance: 50,
        hasStatusBarTranslucent: false,
    }
    constructor(props) {
        super(props);
        this.state = {
            isScroll: false,
        }
    }
    componentDidMount() {
    }
    fun(){
    alert('回退')
    }
    render() {
        return (
            <View >

                {/* 内容 */}
                <ScrollView
                    contentContainerStyle={{ top: 0 }}
                    onScroll={(e) => {
                        if (e.nativeEvent.contentOffset.y > this.props.distance) {
                            this.setState({ isScroll: true });
                        } else {
                            this.setState({ isScroll: false });
                        }
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    {this.props.children}
                </ScrollView>

                {/* 这部分可以优化 */}

                {/* 头部 */}
                <View style={[{ paddingTop: this.props.hasStatusBarTranslucent ? 30 : 0 }, { paddingBottom: this.props.hasStatusBarTranslucent ? 10 : 0 }, { height: 50 + (this.props.hasStatusBarTranslucent ? 10 : 0) }, { position: 'absolute' }, { backgroundColor: this.state.isScroll ? this.props.color1 : this.props.color0 }, styles.headerViewStyle]}>
                    {/* <i class="fa fa-angle-left" aria-hidden="true"></i> */}
                    {/* 左边 */}
                    <TouchableOpacity onPress={() => {this.fun()}} style={{width:35}}>
                        <Icon name={this.props.IconLeft} size={this.props.size} color={this.state.isScroll ? this.props.IconLeftColorIsScroll : this.props.IconLeftColor} />
                    </TouchableOpacity>
                    {/* 中间 */}
                    <Text style={[{ fontSize: this.props.headerTitleSize, color: this.props.headerTitleColor }, styles.headerTitle]} > {this.state.isScroll ? this.props.headerTitle : ''}</Text>
                    {/* 右边 */}
                    <TouchableOpacity onPress={this.props.callbackRight}>
                        <Icon name={this.props.IconRight} size={this.props.size} color={this.state.isScroll ? this.props.IconRightColorIsScroll : this.props.IconRightColor} />
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    headerViewStyle: {
        width: width,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        alignSelf: 'center',
    }
});


