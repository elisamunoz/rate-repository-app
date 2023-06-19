// import Constants from 'expo-constants';
import { View } from "react-native"
// import RepositoryList from './RepositoryList';
import Text from './Text';
// import styles from "../styles/Main.styles";


const Main = () => {
  return (
    <View>
      <Text>Simple Text</Text>
      <Text style={{ paddingBottom: 10 }}>Text with custom style</Text>
      <Text fontWeight="bold" fontSize="subheading">Bold subheading</Text>
      <Text color="textSecondary">Text with secondary color</Text>
    </View>
  );
};

export default Main;