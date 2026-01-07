import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppHeader = () => {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';

  return (
    <View style={styles.header}>
      <View style={styles.accent} />
      <Text style={styles.greeting}>{greeting}</Text>
      <Text style={styles.headerTitle}>My First React Native App</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: '#3E4A59',
    alignItems: 'center',
  },
  accent: {
    width: 40,
    height: 4,
    backgroundColor: '#4FD1C5',
    borderRadius: 2,
    marginBottom: 8,
  },
  greeting: {
    fontSize: 14,
    color: '#CBD5E1',
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
