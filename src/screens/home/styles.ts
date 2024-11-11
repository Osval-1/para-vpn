import { typography } from "@/styles/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    ...typography.h1,
    color: "#fff",
  },
  illustrationContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    gap:10
  },
  imageStyle: {
    width: 150,
    height: 150,
  },
  header2:{
    ...typography.h2,
    color:"#fff"
  },
  connectLeftText: {
    ...typography.body,
    color: "grey",
  },
  connectRightText: {
    ...typography.body,
    color: "#fff",
  },
  connectionContainer: {
    flexDirection: "row",
    gap: 30,
    justifyContent: "center",
    marginTop: 50,
  },
  serverContainer:{
    marginTop:50,
    gap:16
  },
});
