import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppFooter = () => {
  const year = new Date().getFullYear();

  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        © {year} Rihal · Built with React Native
      </Text>
    </View>
  );
};

export default AppFooter;

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#3E4A59',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#E2E8F0',
  },
});
