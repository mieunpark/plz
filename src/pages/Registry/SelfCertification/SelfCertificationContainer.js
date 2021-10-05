import moment from 'moment';
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Container } from '../../../components/Container'
import { Provider} from "react-redux"
import { store } from "../../redux/store"
import SelfCertificationPresenter from './SelfCertificationPresenter';

const SelfCertificationContainer = ({navigation}) => {
    return (
      <SelfCertificationPresenter/>
    );
};

export default SelfCertificationContainer;
