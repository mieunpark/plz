import moment from 'moment';
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  Text,
  Dimensions
} from 'react-native';
import { Container } from '../../../components/Container'
const chartHeight = Dimensions.get('window').height;
const chartWidth = Dimensions.get('window').width;
const MapPresenter = () => {

  const [Percent, setPercent] = useState(0)
  const [PercentNumber, setPercentNumber] = useState(0)
  const loadingBar = useRef(new Animated.Value(0)).current;
  const PercentGage = useRef(new Animated.Value(1)).current;
  const PercentNumberGage = useRef(new Animated.Value(0)).current;
  const Percentloading = () => {
    // Will change PercentBar value to 1 in 5 seconds
    Animated.timing(PercentGage, {
      toValue: 56,
      duration: 8000,
      useNativeDriver: false,
    }).start();
    Animated.timing(PercentNumberGage, {
      toValue: 100,
      duration: 8000,
      useNativeDriver: false,
    }).start();
  };
  const loading = () => {
    // Will change loadingBar value to 1 in 5 seconds
    Animated.loop(
      Animated.timing(loadingBar, {
        toValue: chartWidth,
        duration: 5000,
        easing: Easing.exp,
        useNativeDriver: false,
      })

    ) .start();
   
  };
  const PercentActive = () => {
    Percentloading(),
      PercentGage.addListener((e) => {
        console.log(e.value, "e")
        setPercent(Math.round(e.value))
      })
    PercentNumberGage.addListener((e) => {
      setPercentNumber(Math.round(e.value))
    })
  }
  useEffect(() => {
    PercentActive(), loading()
  }, []);
  return (
    <Container.MainContainer>
      <View style={{ width: chartWidth, height: chartHeight, paddingLeft: 20 * chartWidth / 375, paddingRight: 20 * chartWidth / 375, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
        <Animated.View style={{ left: loadingBar }}>
          <View style={{ position: 'absolute', width: 31, height: 31, backgroundColor: 'white', shadowColor: 'black', elevation: 5 }} />
          <View style={{ position: 'absolute', width: 29, height: 31, backgroundColor: 'white', shadowColor: 'black', elevation: 6 }} />
          <View style={{ position: 'absolute', width: 27, height: 31, backgroundColor: 'white', shadowColor: 'black', elevation: 7 }} />
          <View style={{ position: 'absolute', width: 25, height: 31, backgroundColor: 'white', shadowColor: 'black', elevation: 8 }} />
          <View style={{ position: 'absolute', width: 23, height: 31, backgroundColor: 'white', shadowColor: 'black', elevation: 9 }} />
          <View style={{ position: 'absolute', width: 21, height: 31, backgroundColor: 'white', shadowColor: 'black', elevation: 10 }} />

        </Animated.View>


      </View>

    </Container.MainContainer>
  );
};
const styles = StyleSheet.create({
  loading_bar: {
    position: 'absolute',
    height: '55%',
    opacity: 0.5,
    borderRadius: 8,
    backgroundColor: "#ffffff"
  },
  invisible_bar: {
    position: 'absolute',
    width: chartWidth * 14 / 375,
    height: chartHeight * 27 / 734,
    backgroundColor: 'white',
    shadowColor: 'white'

  }



});

export default MapPresenter;