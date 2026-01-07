import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        About this app
      </Text>

      <Text style={styles.subtitle}>
        A simple React Native screen built with core components.
      </Text>

      <Text
        style={styles.paragraph}
        numberOfLines={4}
      >
        This application is a training project used to practice layout,
        typography and component structure in React Native.
        The goal is to understand how View and Text work together to
        build clear, readable and reusable user interfaces.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#F4CE14'
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
    color: '#FFFFFF'
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    color: '#EAEAEA'
  }
});