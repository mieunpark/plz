import moment from 'moment';
import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
} from 'react-native';
import { Container } from '../../../components/Container'
import { Provider} from "react-redux"
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { store } from "../../redux/store"
import HomePresenter from './HomePresenter';

const HomeContainer = ({navigation}) => {
  const [heightOri, setHeightOri] = useState(0);
  const [heightDri, setHeightDri] = useState(0);
  const [position, setPosition] = useState(0);
  const [homeIndigator,setHomeIndigator] =useState(0);
  let a =getBottomSpace();

    return (
      <SafeAreaView style={[{height: '100%',backgroundColor:'red'}]} onLayout={(event) => {
        var {height} = event.nativeEvent.layout;
        setHeightOri(height)}}>
        <View style={[{height: '100%'}]} onLayout={(event) => {
          var {y, height} = event.nativeEvent.layout;
          setHeightDri(height)
          setPosition(y)
          setHomeIndigator(a)
          console.log(a,y)}}>
          <HomePresenter heightDri={heightDri} heightOri={heightOri} position={position} homeIndigator={homeIndigator}/>
        </View>
      </SafeAreaView>
    );
};

export default HomeContainer;
