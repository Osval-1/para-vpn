import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "@/types/screens";
import { Icon } from "@/components/icon";
import Home from "@/screens/home";
import Servers from "@/screens/servers";
import { styles } from "./styles";

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabs = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarLabel: "",
          tabBarStyle: styles.containerStyle,
          headerShown: false,
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
          // tabBarBackground: () => (

          // ),
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  name="dashboard-fill-1"
                  size={24}
                  color={focused ? "#3FBDF1" : "#9B9B9B"}
                  style={{
                    backgroundColor: focused
                      ? "rgba(63, 189, 241,0.2)"
                      : "#fff",
                    padding: 10,
                    borderRadius: 14,
                  }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Servers"
          component={Servers}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  name="dashboard-fill-1"
                  size={24}
                  color={focused ? "#3FBDF1" : "#9B9B9B"}
                  style={{
                    backgroundColor: focused
                      ? "rgba(63, 189, 241,0.2)"
                      : "#fff",
                    padding: 10,
                    borderRadius: 14,
                  }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};
export default BottomTabs;
