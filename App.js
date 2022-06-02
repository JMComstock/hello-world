import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.titleText}>Hello World!</Text>
        <Text style={styles.titleText}>My name is Jason</Text>
        <Text style={styles.titleText}>This is my first React Native App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rebeccapurple',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
