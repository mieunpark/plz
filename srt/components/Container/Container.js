import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { useSelector } from "react-redux";
  
export default {
  MainContainer: ({children}) => {
    const backgroundColor = useSelector(state => state.defaultCss.backgroundColor);

    return (
      <SafeAreaView style={[{height: '100%', width: '100%', backgroundColor: backgroundColor}]}>
        <View style={[{height: '100%', width: '100%', backgroundColor: backgroundColor}]}>
          {children}
        </View>
      </SafeAreaView>
    );
  },
  C1_T1_t1: ({children, title}) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
    <View style={styles.sectionContainer}>
        <Text
        style={[
            styles.sectionTitle,
            {
            color: isDarkMode ? '#FFF' : '#000',
            },
        ]}>
        {title}
        </Text>
        <Text
        style={[
            styles.sectionDescription,
            {
            color: isDarkMode ? '#DAE1E7' : '#444',
            },
        ]}>
        {children}
        </Text>
    </View>
    );
  },
  Title_Column: ({children, title}) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
    <View style={styles.sectionContainer}>
        <Text
        style={[
            styles.sectionTitle,
            {
            color: isDarkMode ? '#FFF' : '#000',
            },
        ]}>
        {title}
        </Text>
        <Text
        style={[
            styles.sectionDescription,
            {
            color: isDarkMode ? '#DAE1E7' : '#444',
            },
        ]}>
        {children}
        </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 16,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '800',
    },
});