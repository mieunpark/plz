import moment from 'moment';
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Container } from '../../../components/Container'
import { Provider} from "react-redux"
import { store } from "../../redux/store"
import SignupPresenter from './SignupPresenter';

const SignupContainer = ({navigation}) => {
  const GoBackTerms = () => {
    navigation.navigate("Terms")
  }

    return (
      <SignupPresenter GoBackTerms={GoBackTerms}/>
    );
};

export default SignupContainer;
