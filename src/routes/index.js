import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomePage from '../components/HomePage/HomePage.component';
import CreateFormPage from '../components/CreateFormPage/CreateForm.component';

const AppNavigator = createStackNavigator({
  HomePage,
  CreateFormPage,
}, {
  initialRouteName: 'HomePage',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'blue',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

const Routes = createAppContainer(AppNavigator);
export default Routes;
