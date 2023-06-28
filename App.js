import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    //iOS: View -> UIView
    //Android: View -> AndroidView

    //let x;
    //x.toString();
    
    <View style={styles.container}>
      <Text>Hello React Native - Kesira</Text>
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
