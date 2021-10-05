import moment from 'moment';
import React from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';
import { Container } from '../../../components/Container'


const chartWidth = Dimensions.get('window').width;

const CheckPresenter = ({ navigation }) => {
  
  return(
    <Container.MainContainer>
    <View >
      <Text style={{fontFamily:'NotoSansKR-Bold'}}>I'm so cute</Text>
      <Text style={{fontFamily:'Birthstone-Regular'}}>omg omg</Text>
    </View>
  </Container.MainContainer>
  );
};
export default CheckPresenter;
