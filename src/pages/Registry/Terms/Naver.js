import moment from 'moment';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import { WebView } from 'react-native-webview';
const Naver = ({navigation}) => {

    const goBack = () => {
        navigation.pop()
    }
    return (<>
          <WebView
          source={{uri: 'https://www.naver.com/'}}
          style={{marginTop: 20}}
          />
          <TouchableOpacity style={{width: 100, height: 100, position: 'absolute'}} onPress={() => goBack()}>
            <View style={{width: 100, height: 100, backgroundColor: 'black'}}>

            </View>
          </TouchableOpacity>
          </>
    );
};

export default Naver;
