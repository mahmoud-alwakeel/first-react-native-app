import { View, Text } from "react-native";

export default function Greet({name}) {
    return(
        <View>
            <Text>
                from Greet custom component, Heyyy {name}
            </Text>
        </View>
    )
}