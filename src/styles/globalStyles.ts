import { StyleSheet } from "react-native";
import { screenWidth, screenHeight } from "./metrics";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: screenWidth * 0.043,
    backgroundColor: "#001336",
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: "#192948",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
