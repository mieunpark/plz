import moment from 'moment';
import 'moment/locale/ko';
import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  View,
  Dimensions
} from 'react-native';
import { Provider} from "react-redux"
import { store } from "../redux/store"
import App from "./App"
import { getBottomSpace } from 'react-native-iphone-x-helper'
const index: () => Node = () => {
  const [heightOri, setHeightOri] = useState(0);
  const [heightDri, setHeightDri] = useState(0);
  const [position, setPosition] = useState(0);
  const [homeIndigator,setHomeIndigator] =useState(0);
  let a =getBottomSpace();
  

  return (
    <Provider store={store}>
      <SafeAreaView style={[{height: '100%',backgroundColor:'red'}]} onLayout={(event) => {
        var {height} = event.nativeEvent.layout;
        setHeightOri(height)}}>
        <View style={[{height: '100%'}]} onLayout={(event) => {
          var {y, height} = event.nativeEvent.layout;
          setHeightDri(height)
          setPosition(y)
          setHomeIndigator(a)
          console.log(a,y)}}>
          <App heightOri={heightOri} heightDri={heightDri} position={position} homeIndigator={homeIndigator}/>
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default index;
