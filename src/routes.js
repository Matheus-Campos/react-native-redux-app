import { createStackNavigator } from 'react-navigation';

import Main from 'pages/main';
import Favorites from 'pages/favorites';

import { colors } from 'styles';

const Routes = createStackNavigator({
  Main,
  Favorites,
},
{
  initialRouteName: 'Main',
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.primaryDark,
    },
    headerTintColor: colors.white,
  },
});

export default Routes;
