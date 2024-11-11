import { typography } from "@/styles/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#192948",
    height: 56,
    padding: 12,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  countryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },
  imageStyle: {
    width: 25,
    height: 20,
    borderRadius: 2,
  },
  networkContainer: {
    flexDirection: "row",
    gap: 2,
  },
  serverName: {
    ...typography.h2,
    color: "#fff",
  },
});
