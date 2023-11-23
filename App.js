import { setStatusBarBackgroundColor } from "expo-status-bar";
import { View, Text, Image, ImageBackground } from "react-native";
const logoImg = require('./assets/adaptive-icon.png')

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: "plum", padding: 40}}>
      <Text>  
        <Text style={{color: "white"}}> Hello
        </Text> weka
      </Text>
      {/* <Image source={logoImg} style ={{width: 300, height: 300}}/>
      <Image source={{uri: "https://picsum.photos/300"}} style ={{width: 300, height: 300}}/> */}
      <ImageBackground source={logoImg} style={{flex: 1}}>
        <Text>Image background</Text>
      </ImageBackground>
    </View>
  )
}