import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';


// Screens
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import ContactScreen from './src/screens/ContactScreen';
import BlogsScreen from './src/screens/BlogsScreen';


//Stacks-Routes
import DemosStack from './src/routes/DemosStack';

const RootDrawerNavigator = createDrawerNavigator({
  "Home": {
    screen: HomeScreen,
  },
  "Blogs": {
    screen: BlogsScreen
  },
  "Demos": {
    screen: DemosStack
  },
  "About": {
    screen: AboutScreen
  },
  "Contact": {
    screen: ContactScreen
  }
})

export default createAppContainer(RootDrawerNavigator);
