import moment from 'moment';
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Container } from '../../../components/Container'
import { Provider} from "react-redux"
import { store } from "../../redux/store"
import TermsPresenter from './TermsPresenter';

const TermsContainer = ({navigation}) => {
  const GoNaver = ()=>{
      navigation.navigate("Naver")
  }
  const GoBackLogin = () => {
    navigation.navigate("Login")
  }
  const GoSignup = ()=> {
    navigation.navigate("Signup")
  }
    return (
      <TermsPresenter GoNaver={GoNaver} GoBackLogin={GoBackLogin} GoSignup={GoSignup}/>
    );
};

export default TermsContainer;
