import moment from 'moment';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Check from './Check';
import Map from './Map';
import MyPage from './MyPage';
import { Dimensions } from 'react-native';


const Tab = createBottomTabNavigator();

const chartHeight = Dimensions.get('window').height;
const MainPagePresenter = ({ navigation }) => {

    return (
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveBackgroundColor: '#ffffff',
            tabBarInactiveBackgroundColor: "#ffffff",
            tabBarActiveTintColor: "#50bcdf",
            tabBarInactiveTintColor: "#e2e2e2",
            tabBarLabelStyle: {},
            tabBarIconStyle: {},
            tabBarStyle: {
              height: 50,
              backgroundColor:'yellow'
            },
            
          }}
        >
          {/* tabBarOptions={{
            activeBackgroundColor: '#ffffff',
            inactiveBackgroundColor: "#ffffff",
            activeTintColor: "#50bcdf",
            inactiveTintColor: "#e2e2e2",
            labelStyle: {},
            iconStyle: {},
            style: {
              height: 50,
              backgroundColor:'yellow'
            }
          }}
        > */}
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: "Home",
              headerShown: false
            }}
          />
          <Tab.Screen
            name="Check"
            component={Check}
            options={{
              tabBarLabel: "Check",
              headerShown: false
            }}
          />
          <Tab.Screen
            name="Map"
            component={Map}
            options={{
              tabBarLabel: "Map",
              headerShown: false
            }}
          />
          <Tab.Screen
            name="MyPage"
            component={MyPage}
            options={{
              tabBarLabel: "MyPage",
              headerShown: false
            }}
          />
        </Tab.Navigator>
    );
};

export default MainPagePresenter;
