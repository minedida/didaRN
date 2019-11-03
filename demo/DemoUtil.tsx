import React from "react";
import { Platform, ScrollView } from "react-native";
import { List } from "react-native-paper";
import { createStackNavigator, HeaderBackButton
} from "react-navigation-stack";
import { goBack, navigate } from "../src/navigation";

// 一套DSL，用最少的代码创建需要的栈

export const isAndroid = Platform.OS === 'android'
const getComponentName = (cmp) => cmp.displayName || cmp.name || '';
// NavigationStackOptions
export const defaultNavigationOptions =
  (_, title?) => (
    {
      title,
      headerLeft: () => <HeaderBackButton labelVisible={false} onPress={() => goBack()}/>, // https://stackoverflow.com/questions/49477330/modifying-back-button-with-react-navigation-on-specific-screen
    });

const routeConfigMap = (routers) => routers.reduce(
  (p, c) => {
    p[getComponentName(c)] = c;
    return p;
  }, {}
);
const ViewList = ({
  routers,
}) => {
  return (
    <ScrollView
      style={{ backgroundColor: '#fff' }}
    >
      {
        routers.map((item: any, _) =>
          <List.Item
            key={getComponentName(item)}
            title={getComponentName(item)}
            onPress={() => navigate(getComponentName(item))}
          />
        )
      }
    </ScrollView>
  );
};

export const createListStackNavigator = (routers, title, paddingTop = 0, flag = true) => {
  const IndexPage = () => <ViewList routers={routers} />;
  IndexPage.navigationOptions = (...props) => defaultNavigationOptions(props, title)

  const stack = createStackNavigator(
    {
      Index:
        createStackNavigator({ IndexPage }, { headerMode: flag ? 'none' : 'screen' }),
      ...routeConfigMap(routers)
    },
    {
      headerMode: flag ? 'screen' : 'none',
      defaultNavigationOptions: {
        cardStyle: {
          paddingTop,
          backgroundColor: '#fff'
        },
        ...defaultNavigationOptions(null, title)
      },
    }
  ) as any
  stack.displayName = title;
  return stack;
}

export const createNestStackNavigator = (routers, title) => {
  const stack = createStackNavigator(
    routeConfigMap(routers),
    {
      defaultNavigationOptions: {
        ...defaultNavigationOptions(null, title)
      },
    }
  ) as any
  stack.displayName = title;
  return stack;
}
