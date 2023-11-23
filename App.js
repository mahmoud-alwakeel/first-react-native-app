import { useState } from "react";
import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert } from "react-native";
import Greet from "./components/Greet";
const logoImg = require('./assets/adaptive-icon.png')

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  //const [isStatusBarVisible, setIsStatusBarVisible] = useState(true)
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 40 }}>
      <StatusBar backgroundColor="black" />
      
      <ScrollView>
        <Greet name="wakeel" />
        <Text>
          <Text style={{ color: "white" }}> Hello
          </Text> weka
        </Text>
        <Button
          title="press"
          onPress={() => setIsModalVisible(true)}
          color={"midnightblue"}
          disabled={false}
        />
        <Button
          title="Alert"
          onPress={() => Alert.alert("that's it", "we have created ana alert", [
            {
              text: "Cancel",
              onPress: () => console.log("cancel")
            },
            {
              text: "Ok",
              onPress: () => console.log("ok")
            }
          ])}
          color={"blue"}
          disabled={false}
        />
        <ActivityIndicator size="large" color="midnightblue"/>
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

      <Modal 
      visible={isModalVisible} 
      onRequestClose={() => setIsModalVisible(false)}
      animationType="fade"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 40 }}>
          <Button
            title="click to close"
            onPress={() => setIsModalVisible(false)}
          />
          <Text> Modal</Text>
        </View>
      </Modal>
    </View>
  )
}