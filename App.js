import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  TouchableWithoutFeedback, 
  TouchableOpacity,
  TouchableHighlight,
  fade, 
  View, 
  SafeAreaView, 
  IView, 
  TouchableNativeFeedback} from 'react-native';

export default function App() {
  
  //const handlePress = () => console.log("Text pressed");
  console.log("App executed");
  return (
    <SafeAreaView style={styles.container}>
      <<Text>Hello React Native - Kesira! </Text>
      <TouchableNativeFeedback onPress={() => console.log("Image tapped")}>
        <View>
        source={{
          width:200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }} 
        </View>
        </TouchableNativeFeedback>>
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
