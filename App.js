import React from "react";

// import things related to React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens
import NavigationExample from "./src/components/NavigationExample";
import AboutScreen from "./src/components/AboutScreen";
import InfoScreen from "./src/components/InfoScreen"

// create a "stack"
const MyStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen name="HomeScreen" component={NavigationExample} />
        <MyStack.Screen name="AboutScreen" component={AboutScreen}  />
        <MyStack.Screen name="InfoScreen" component={InfoScreen}  options ={{headerBackVisible: false}}/>
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default App;