import { View, Pressable, Text } from "react-native";
import styles from "./AppBar.styles";

const AppBarTab = () =>{ 
  const handlePressAppBar = () => console.log("AppBar!")

  return (
    <Pressable
      onPress={handlePressAppBar}
    >
      <Text style={styles.text}>Repositories</Text>
    </Pressable>
  )}

const AppBar = () => {
  return (
    <View
      style={styles.container}
    >
      <AppBarTab />
    </View>
  )
}

export default AppBar;