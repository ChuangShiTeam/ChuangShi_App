import React from 'react';
import {Animated, Easing, View, Dimensions, Image, Text} from 'react-native';
import {Toast, ActivityIndicator, List, WhiteSpace} from 'antd-mobile';
import constant from '../../util/constant';
import http from '../../util/http';
import style from '../Style.js'

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            is_animate: true,
            animate_opacity: new Animated.Value(1),
            is_load: false,
            product_total: 0,
            product_id: '',
            product_name: 'ss',
            product_image: '',
            product_content: '',
            product_sku_id: '',
            product_sku_price: 0,
            product_sku_total_price: 0,
            product_sku_quantity: 0,
            product_sku_min_quantity: 10
        }

        this.props.navigator.setOnNavigatorEvent(this.handleNavigatorEvent.bind(this));
    }

    componentWillMount() {
        this.handleLoad();
    }

    componentWillUnmount() {

    }

    handleNavigatorEvent(event) {
        if (event.id === 'bottomTabSelected') {
            this.handleLoad();
        } else if (event.id === 'bottomTabReselected') {

        }
    }

    handleAnimation() {
        if (this.state.load) {
            return;
        }

        Animated.timing(this.state.animate_opacity, {
            toValue: 0,
            duration: 300,
            easing: Easing.linear,
        }).start();

        setTimeout(() => {
            this.setState({
                is_animate: false
            });
        }, 1000);
    }

    handleLoad() {
        http.request({
            url: '/product/find',
            data: {
                product_id: '76537999b6c6428d9a78d47739c08fa5'
            },
            success: function (data) {
                this.setState({
                    product_id: data.product_id,
                    product_name: data.product_name,
                    product_image: data.product_image,
                    product_content: data.product_content,
                    product_sku_id: data.product_sku_id,
                    product_sku_price: data.product_sku_price,
                    product_sku_quantity: data.product_sku_quantity,
                    product_sku_total_price: data.product_sku_price * data.product_sku_quantity
                });

                this.handleAnimation();
            }.bind(this),
            complete: function () {
                this.setState({
                    is_load: true
                });
            }.bind(this)
        });
    }

    render() {
        const Item = List.Item;

        return (
            <View style={style.container}>
                <View style={{height: Dimensions.get('window').width}}>
                    {
                        this.state.is_load ?
                            <Image
                                style={{width: Dimensions.get('window').width, height: Dimensions.get('window').width}}
                                source={{uri: 'http://api.chuangshi.nowui.com/upload/c1af3f1ae00e4e0da9b20f5bd41b4279/e62bf319f0094a938436f9b99d3a9870/bbbd6c768fa74b73b3e64220aef42c80.jpeg'}}
                            />
                            :
                            null
                    }
                </View>
                <List>
                    <Item multipleLine style={{height: 55}}>
                        {this.state.product_name}
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex: 1}}>
                                <Text style={style.productPrice}>￥{this.state.product_sku_price.toFixed(2)}</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <View style={style.productTag}>
                                    <Image
                                        style={{width: 15, height: 15}}
                                        source={require('../../assets/image/round_check.png')}
                                    />
                                    <Text>正品保证 </Text>
                                    <Image
                                        style={{width: 15, height: 15}}
                                        source={require('../../assets/image/round_check.png')}
                                    />
                                    <Text>全场包邮</Text>
                                </View>
                            </View>
                        </View>
                    </Item>
                </List>
                {
                    this.state.is_animate ?
                        <Animated.View style={[style.loadingMask, {
                            opacity: this.state.animate_opacity
                        }]}>
                            <View style={style.loading}><ActivityIndicator animating/></View>
                        </Animated.View>
                        :
                        null
                }
            </View>
        );
    }
}

export default ProductDetail;