import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Upcoming from '../../features/Upcoming';
import TopRated from '../../features/TopRated';
import Popular from '../../features/Popular';
import DetailMovie from '../../features/DetailMovie';

const UpcomingStack = createStackNavigator({
  Upcoming,
  DetailMovie,
}, {
  initialRouteName: 'Upcoming',
});

const TopRatedStack = createStackNavigator({
  TopRated,
  DetailMovie,
}, {
  initialRouteName: 'TopRated',
});

const PopularStack = createStackNavigator({
  Popular,
  DetailMovie,
}, {
  initialRouteName: 'Popular',
});

const AppNaviation = createBottomTabNavigator({
  Upcoming: UpcomingStack,
  TopRated: TopRatedStack,
  Popular: PopularStack,
}, {
  initialRouteName: 'Upcoming',
});

const AppContainer = createAppContainer(AppNaviation);

export default AppContainer;
