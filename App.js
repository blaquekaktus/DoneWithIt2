import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  TouchableWithoutFeedback, 
  TouchableOpacity,
  TouchableHighlight,
  fade, 
  View, 
  Button,
  SafeAreaView, 
  IView, 
  TouchableNativeFeedback,
  Alert
} from 'react-native';

export default function App() {
  
  const handlePress = () => console.log("Text pressed");
  console.log("App executed");
  return (
    <SafeAreaView style={styles.container}>
      <Button 
      title='Click Me'
      onPress={() => 
        Alert.alert("Mylert!","Button tapped", [
        {text: "Yes", onPress: () => console.log("Yes")},
        {text: "No", onPress: () => console.log("No")},
      ])
      } 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center'
  },
});
