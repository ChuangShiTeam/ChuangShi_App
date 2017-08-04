import {Navigation} from 'react-native-navigation';

import {registerScreens} from './Screen';

registerScreens();

Navigation.startTabBasedApp({
    tabs: [
        {
            label: '进货',
            screen: '/product/detail',
            icon: require('../assets/image/cart.png'),
            // selectedIcon: require('./screens/my_active.svg'),
            title: '我要进货'
        },
        {
            label: '团队',
            screen: '/team/index',
            icon: require('../assets/image/friend.png'),
            // selectedIcon: require('./screens/index_active.svg'),
            title: '我的团队'
        },
        {
            label: '商学院',
            screen: '/product/detail',
            icon: require('../assets/image/read.png'),
            // selectedIcon: require('./screens/my_active.svg'),
            title: '商学院'
        },
        {
            label: '管理',
            screen: '/product/detail',
            icon: require('../assets/image/people.png'),
            // selectedIcon: require('./screens/my_active.svg'),
            title: '管理中心'
        }
    ],
    tabsStyle: {
        tabBarButtonColor: '#949494',
        tabBarSelectedButtonColor: '#a72025',
    }
});