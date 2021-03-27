import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import Home from "../screens/Home";
import Detail from "../screens/Detail";

const Stack = createSharedElementStackNavigator();

const options = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({ current: { progress } }: any) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={() => options}
          sharedElementsConfig={(route, otherRoute, showing) => {
            const { item } = route.params;

            return [
              {
                id: `item.${item.id}.image_url`,
                animation: "move",
                resize: "clip",
              },
              {
                id: `item.${item.id}.title`,
                animation: "fade",
                resize: "clip",
              },
              {
                id: `item.${item.id}.description`,
                animation: "move",
                resize: "clip",
              },
              {
                id: `item.${item.id}.iconName`,
                animation: "fade",
                resize: "clip",
              },
            ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
