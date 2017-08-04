import React from 'react';
import {Animated, Easing, View} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Toast, ActivityIndicator, List, WhiteSpace } from 'antd-mobile';
import Style from '../Style.js'

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loadingOpacity: new Animated.Value(1)
        }
    }

    componentWillMount() {
        // Navigation.showModal({
        //     screen: "example.PushedScreen", // unique ID registered with Navigation.registerScreen
        //     title: "Modal", // title of the screen as appears in the nav bar (optional)
        //     passProps: {}, // simple serializable object that will pass as props to the modal (optional)
        //     navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        //     navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        //     animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        // });

        // Navigation.startSingleScreenApp({
        //     screen: {
        //         screen: 'example.PushedScreen', // unique ID registered with Navigation.registerScreen
        //         title: 'Welcome', // title of the screen as appears in the nav bar (optional)
        //         navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        //         navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        //     }
        // });

        this.startAnimation();
    }

    componentWillUnmount() {

    }

    startAnimation() {
        Animated.timing(this.state.loadingOpacity, {
            toValue: 0,
            duration: 300,
            easing: Easing.linear,// 线性的渐变函数
        }).start();
    }

    render() {
        const Item = List.Item;
        const Brief = Item.Brief;

        return (
            <View style={Style.container}>
                <WhiteSpace size="lg"/>
                <List>
                    <Item arrow="horizontal" multipleLine>
                        Title <Brief>subtitle</Brief>
                    </Item>
                </List>
                <Animated.View style={[Style.loadingMask, {
                    opacity: this.state.loadingOpacity
                }]}>
                    <View style={Style.loading}><ActivityIndicator animating/></View>
                </Animated.View>
            </View>
        );
    }
}

export default Index;