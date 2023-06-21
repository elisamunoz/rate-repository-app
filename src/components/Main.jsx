import { View } from "react-native";
import { Route, Routes, Navigate } from 'react-router-native'
import RepositoryList from './RepositoryList';
import AppBar from "./AppBar/AppBar";
import styles from "../styles/Main.styles";


const Main = () => {
  return (
    <View style={styles.main}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        {/* for catching paths that don't match any previously defined path */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;