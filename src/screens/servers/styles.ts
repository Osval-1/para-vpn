import { StyleSheet } from "react-native";
import { typography } from "@/styles/typography";

export const styles = StyleSheet.create({
  serverContainer: {
    gap: 16,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#001336",
    paddingVertical: 10,
  },
  header: {
    ...typography.h1,
    color: "#fff",
  },
  header2: {
    ...typography.h2,
    color: "#fff",
  },
  imageStyle: {
    width: "100%",
    height: 130,
    borderRadius:10
  },
});
