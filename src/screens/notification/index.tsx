import { Text } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/globalStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const Notification = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Text>Notification</Text>
    </SafeAreaView>
  );
};

export default Notification;