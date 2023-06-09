import {useState} from 'react'
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { createBottomTabNavigator,  DefaultTheme, DarkTheme } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./views/Home";
import History from "./views/History";
const Tab = createBottomTabNavigator();

function App() {
  const scheme = useColorScheme();
  const [history, setHistory] = useState([]) 
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator>
        <Tab.Screen name="Record" children={()=><Home setHistory={setHistory}/>} />
        <Tab.Screen name="History" children={()=><History history={history}/>}/> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App