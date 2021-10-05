import moment from 'moment';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import Home from './home';
import Login from '../pages/Registry/Login';
import Signup from '../pages/Registry/Signup';
// import Terms from '../pages/Registry/Terms';
// import Naver from '../pages/Registry/Terms/Naver';
// import MainPage from '../pages/MainPage';
// import Percent from '../pages/MainPage/Home/HomePresenter'
const Stack = createStackNavigator();

const MainStackPresenter = ({navigation}) => {

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          headerTitleAlign: 'Center',
          headerTitle: '1',
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
          headerTitleAlign: 'Center',
          headerTitle: '1',
        }}
      />
      {/* <Stack.Screen
        name="Terms"
        component={Terms}
        options={{
          headerShown: false,
          headerTitleAlign: 'Center',
          headerTitle: '1',
        }}
      /> */}
      {/* <Stack.Screen
        name="Naver"
        component={Naver}
        options={{
          headerShown: false,
          headerTitleAlign: 'Center',
          headerTitle: '1',
        }}
      /> */}
      {/* <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{
          headerShown: false,
          headerTitleAlign: 'Center',
          headerTitle: '1',
        }}
      /> */}
      {/* <Stack.Screen
        name="Percent"
        component={Percent}
        options={{
          headerShown: false,
          headerTitleAlign: 'Center',
          headerTitle: '1',
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default MainStackPresenter;
