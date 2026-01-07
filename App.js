import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';


import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AboutScreen from './AboutScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <AppHeader />

      <View style={styles.content}>
        <AboutScreen />
      </View>

      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57'
  },
  content: {
    flex: 1
  }
});