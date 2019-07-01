import React from "react";
import { StyleSheet, View, Platform, TouchableOpacity } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import { iOSColors } from "react-native-typography";

// @ts-ignore
import HumanShowcaseScreen from "./HumanShowcaseScreen";
// @ts-ignore
import MaterialShowcaseScreen from "./MaterialShowcaseScreen";

const drawerButton = icon => ({ focused }) => (
  <Ionicons
    name={icon}
    size={28}
    style={{ color: focused ? iOSColors.blue : iOSColors.gray }}
  />
);

const typeDemoHeaderRight = navigation => (
  <View style={styles.headerRightButtonRow}>
    <TouchableOpacity
      onPress={navigation.state.params && navigation.state.params.showNames}
    >
      <Ionicons
        name={Platform.OS === "ios" ? "ios-code" : "md-code"}
        size={28}
        style={{ paddingHorizontal: 16, color: iOSColors.black }}
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={
        navigation.state.params && navigation.state.params.showGuidelines
      }
    >
      <Ionicons
        name={Platform.OS === "ios" ? "ios-crop" : "md-crop"}
        size={28}
        style={{ paddingRight: 16, color: iOSColors.black }}
      />
    </TouchableOpacity>
  </View>
);

const openDrawerHeaderButton = (navigation, color) => (
  <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
    <Ionicons
      name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
      size={30}
      style={{ paddingHorizontal: 16, color }}
    />
  </TouchableOpacity>
);

// @ts-ignore
const guidelinesStackNavigator = (screen, headerTitle) =>
  StackNavigator(
    {
      Screen: { screen }
    },
    {
      navigationOptions: ({ navigation }) => ({
        headerLeft: openDrawerHeaderButton(navigation, iOSColors.black),
        headerTitle,
        headerRight: typeDemoHeaderRight(navigation)
      })
    }
  );

const Root = DrawerNavigator({
  // humanShowcase: {
  //   screen: StackNavigator({
  //     Screen: { screen: HumanShowcaseScreen }
  //   })
  // },
  materialShowcase: {
    screen: StackNavigator({
      Screen: {
        screen: MaterialShowcaseScreen,
        navigationOptions: ({ navigation }) => ({
          headerTitle: "Your Daily Mix",
          headerLeft: openDrawerHeaderButton(navigation, iOSColors.white)
        })
      }
    }),
    navigationOptions: {
      drawerLabel: "Showcase - Material Design",
      drawerIcon: drawerButton("ios-create")
    }
  },
});

const TypographyExample = () => {
  return (
    <View style={styles.container}>
      <Root />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerRightButtonRow: {
    flexDirection: "row"
  }
});

export default TypographyExample;
