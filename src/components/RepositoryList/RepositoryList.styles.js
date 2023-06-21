import { StyleSheet } from "react-native";
import theme from "../../styles/themes";

const styles = StyleSheet.create({
  repositoryList: {

  },
  content: {
    padding: 15,
    backgroundColor: theme.colors.repositoryListBackground,
  },
  separator: {
    height: 20,
  },
  tinyLogo: {
    height: 50,
    width: 50,
    borderRadius: theme.borderRadiuses.tiny
  },
  topContent: {
    flexDirection: "row"
  },
  bottomContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 15
  },
  languageTag: {
    alignSelf: "flex-start",
  },
  languageTagText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.primary,
    color: theme.colors.barTextColor,
    borderRadius: theme.borderRadiuses.tiny
  },
  fullName: {
    fontWeight: theme.fontWeights.bold,
    fontSize: 18
  },
  imageContainer: {

  },
  topContentText: {
    flexShrink: 1,
    paddingLeft: 20
  },
  description: {
    paddingTop: 5,
    paddingBottom: 7
  },
  repositoryStat: {
  
  },
  data: {
    paddingBottom: 3,
    textAlign: "center", 
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading
  },
  type: {
    textAlign: "center"
  }

});

export default styles;
