import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "@/styles/metrics";
import { typography } from "@/styles/typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001336",
  },
  background: {
    flex: 1,
    paddingHorizontal: screenWidth * 0.043,
  },
  textContainer:{
    gap:20
  },
  headerText: {
    ...typography.h1,
    color: "#fff",
    textAlign: "center",
    marginTop:screenHeight*0.55
  },
  bodyText: {
    ...typography.body,
    textAlign: "center",
    color: "#C1C1C1",
    marginBottom:42
  },
});
