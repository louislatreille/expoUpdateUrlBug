import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";

console.log("TEST_ENV_VAR:", Constants.manifest?.extra?.TEST_ENV_VAR);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Displaying TEST_ENV_VAR.</Text>
      <Text>Line below should display `test`:</Text>
      <Text>{Constants.manifest?.extra?.TEST_ENV_VAR}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
