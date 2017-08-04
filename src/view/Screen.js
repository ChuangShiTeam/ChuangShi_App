import {Navigation} from 'react-native-navigation';

import TeamIndex from './team/TeamIndex';
import ProductDetail from './product/ProductDetail';
import Article from './Article';
import Manage from './Manage';

export function registerScreens() {
    Navigation.registerComponent('/team/index', () => TeamIndex);
    Navigation.registerComponent('/product/detail', () => ProductDetail);
    Navigation.registerComponent('example.Article', () => Article);
    Navigation.registerComponent('example.Manage', () => Manage);
}