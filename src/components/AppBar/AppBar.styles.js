import Constants from "expo-constants"
import { StyleSheet } from "react-native"
import theme from "../../styles/themes";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.barBackground,
  },
  text: {
    color: theme.colors.barTextColor,
    fontWeight: theme.fontWeights.bold,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10, 
    fontSize: theme.fontSizes.heading
  },
})

export default styles;