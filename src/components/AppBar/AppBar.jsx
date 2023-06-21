import { Text, ScrollView } from "react-native";
import { Link } from "react-router-native";
import styles from "./AppBar.styles";

const AppBarTab = ({children, to}) =>{ 
  const handlePressAppBar = () => console.log(children)

  return (
    <Link
      to={to}
      onPress={handlePressAppBar}
    >
      <Text style={styles.text}>{children}</Text>
    </Link>
  )}

const AppBar = () => {
  return (
    <ScrollView
      horizontal
      style={styles.container}
    >
      <AppBarTab to="/">Repositories</AppBarTab>
      <AppBarTab to="signIn">Sign in</AppBarTab>
    </ScrollView>
  )
}

export default AppBar;