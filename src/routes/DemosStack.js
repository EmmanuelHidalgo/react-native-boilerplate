import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import DemosScreen from '../screens/DemosScreen';
import SearchUserScreen from '../screens/demos/SearchUserScreen';

const navigator = createStackNavigator(
  {
    Demo: DemosScreen,
    Search: SearchUserScreen
  },
  {
    initialRouteName: 'Demo',
    defaultNavigationOptions: {
      title: 'App Demos',
    },
  }
);


export default createAppContainer(navigator);
