import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "@/types/screens";
import { Icon } from "@/components/icon";
import Home from "@/screens/home";
import Servers from "@/screens/servers";
import { styles } from "./styles";
import Settings from "@/screens/settings";
import Notification from "@/screens/notification";

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabs = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarLabel: "",
          tabBarStyle: styles.container,
          headerShown: false,
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  name="home-2"
                  size={24}
                  color={focused ? "#fff" : "#9B9B9B"}
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
                  name="archive"
                  size={24}
                  color={focused ? "#fff" : "#9B9B9B"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  name="setting-2"
                  size={24}
                  color={focused ? "#fff" : "#9B9B9B"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  name="notification-bing"
                  size={24}
                  color={focused ? "#fff" : "#9B9B9B"}
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
