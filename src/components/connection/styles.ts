import { typography } from "@/styles/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#192948",
    width:80,
    borderRadius:10,
    padding:8,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
  },
  speedLabel:{
    ...typography.body,
    color:"#fff"
  }
});
