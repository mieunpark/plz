import React, {useEffect} from 'react';
import {
  useColorScheme,
  View,
  Text,
} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { SAVE_VIEW, SAVE_CSS } from "../redux/actionTypes";
import MainStack from '../MainStack'
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from "react-native-splash-screen";

const App = (Props) => {

  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();

  const darkMode = useSelector(state => state.defaultCss.darkMode);
  const backgroundColor = useSelector(state => state.defaultCss.backgroundColor);
  const startPosition = useSelector(state => state.viewPoint.startPosition);
  const bottomPosition = useSelector(state => state.viewPoint.bottomPosition);
  const scaleHeight = useSelector(state => state.viewPoint.scaleHeight);

 useEffect(()=>{
   setTimeout(() => {
     SplashScreen.hide();
   }, 500);
 },[])

  useEffect(() => {
    const {heightOri} = Props
    if (heightOri !== 0) {
        dispatch({ type: SAVE_VIEW, payload: {startPosition: Props.position, bottomPosition: Props.heightOri-Props.homeIndigator, scaleHeight: Props.heightDri-Props.homeIndigator}})
        dispatch({ type: SAVE_CSS, payload: {darkMode: isDarkMode, backgroundColor: isDarkMode ? '#222' : '#F3F3F3'}})
    }
  },[Props])
  
  return (
    <NavigationContainer>
      {/* <MainStack /> */}
    </NavigationContainer>
  );
};

export default App;
