import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, useWindowDimensions } from 'react-native';

export default function App() {
  // Get the current dimensions of the screen to detect orientation
  const { height, width } = useWindowDimensions();
  const isLandscape = width > height; // Check if the current orientation is landscape

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello World App</Text>
      </View>

      {/* Content Section */}
      <View style={[styles.content, isLandscape ? styles.landscapeContent : null]}>
        <Text style={styles.text}>Timothy Choi</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    width: '100%',
    padding: 16,
    backgroundColor: '#6200ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center', // Centers vertically
    alignItems: 'center',      // Centers horizontally
  },
  landscapeContent: {
    flexDirection: 'row', // Change layout to row in landscape mode
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
});
