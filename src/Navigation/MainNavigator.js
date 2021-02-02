import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

//Screens
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import CreatePromiseScreen from '../screens/CreatePromiseScreen';
import HomeScreen from '../screens/HomeScreen';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator(
    {
      entryFlow: createSwitchNavigator({
        Signup: SignupScreen,
        Login: LoginScreen,
      }),
      Home: HomeScreen,
      CreatePromise: CreatePromiseScreen,
    },
    {
      headerMode: 'none',
    },
  ),
  mainFlow: createBottomTabNavigator({
    accountFlow: createStackNavigator({
      Home: HomeScreen,
    }),
  }),
});

export default createAppContainer(switchNavigator);
