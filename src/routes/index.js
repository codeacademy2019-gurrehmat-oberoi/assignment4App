import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({}, { initialRouteName: '' });

const Routes = createAppContainer(AppNavigator);
export default Routes;
