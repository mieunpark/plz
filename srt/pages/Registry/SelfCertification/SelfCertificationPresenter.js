import moment from 'moment';
import React from 'react';
import {
  View,
  Dimensions
} from 'react-native';
import { Container } from '../../../components/Container'
import { Provider } from "react-redux"
import { store } from "../../redux/store"


const chartHeight = Dimensions.get('window').height;
const chartWidth = Dimensions.get('window').width;

const SelfCertificationPresenter = () => {
 

  return (
    <Container.MainContainer>
      <View style={{ width: chartWidth, height: chartHeight ,backgroundColor:'White'}}>
      
      </View>
    </Container.MainContainer>
  );

};


export default SelfCertificationPresenter;
