import { setStatusBarBackgroundColor } from "expo-status-bar";
import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable } from "react-native";
const logoImg = require('./assets/adaptive-icon.png')

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 40 }}>
      <ScrollView>
        <Text>
          <Text style={{ color: "white" }}> Hello
          </Text> weka
        </Text>
        <Button
          title="press"
          onPress={() => console.log("button pressed")}
          color={"midnightblue"}
          disabled={false}
        />
        <Pressable onPress={() => console.log("image 1 pressed")}>
          <Image source={logoImg} style={{ width: 300, height: 300 }} />
        </Pressable>
        {/* <Image source={{uri: "https://picsum.photos/300"}} style ={{width: 300, height: 300}}/> */}
        {/* <ImageBackground source={logoImg} style={{flex: 1}}> </ImageBackground> */}
        <Pressable onPressIn={() => console.log("on press in triggered")} onLongPress={() => console.log("on long press detected")} onPressOut={() => console.log("om press out")}>
          <Text>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            condimentum, nisl eu ultricies ultricies, nunc nisl aliquam nunc, eget
            aliquam nisl nunc sit amet nisl. Donec condimentum, nisl eu ultricies
            ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc sit amet
            nisl. Donec condimentum, nisl eu ultricies ultricies, nunc nisl
            aliquam nunc, eget aliquam nisl nunc sit amet nisl. Donec condimentum,
            nisl eu ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nist
            nunc sit amet nisl. Donec condimentum, nisl eu ultricies ultricies,
            nunc nisl aliquam nunc, eget aliquam nisl nunc sit amet nisl. Donec
            condimentum, nisl eu ultricies ultricies, nunc nisl aliquam nunc, eget
            aliquam nisl nunc sit amet nisl. Donec condimentum, nisl eu ultricies
            ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc sit amet
            nisl. Donec condimentum, nisl eu ultricies ultricies, nunc nisl
            aliquam nunc, eget aliquam nisl nunc sit amet nisl. Donec condimentum,
            nisl eu ultricies</Text>
        </Pressable>
        <Pressable onPress={() => console.log("image 2 pressed")}>
          <Image source={logoImg} style={{ width: 300, height: 300 }} />
        </Pressable>
      </ScrollView>
    </View>
  )
}