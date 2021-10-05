import moment from 'moment';
import React, {useState} from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Container } from '../../../components/Container'
import { Provider} from "react-redux"
import { store } from "../../redux/store"
import LoginPresenter from './LoginPresenter';

const LoginContainer = ({navigation}) => {
  const GoTerms = ()=>{
    navigation.navigate("Terms")
  }
  const GoMainPage = ()=>{
    navigation.navigate("MainPage")
  }
    return (
      <LoginPresenter GoTerms={GoTerms} GoMainPage={GoMainPage}/>
    );
};

export default LoginContainer;
