import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// icons 
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
//

import homePage from './src/screens/HomePage'
//import Welcome from './src/screens/Welcome'
import Liked from "./src/screens/Liked";
import Tickets from "./src/screens/Tickets";
import EventDetail from "./src/screens/EventDetail";


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();


export default function App() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={MyTab} />
      <Stack.Screen name="EventDetail" component={EventDetail} />
    </Stack.Navigator>
    </NavigationContainer>
    )
}


function MyTab() {
  return (
    
    
            <Tab.Navigator initialRouteName = "homepage" screenOptions={{headerShown: false}}>
                <Tab.Screen
                     name="Homepage"
                     component={homePage}
                     options={{
                        tabBarLabel: 'Homepage',
                        tabBarOptions: {
                            activeTintColor: '#000',
                            inactiveTintColor: '#fff',
                          },
                        tabBarIcon: ({ color, size }) => (
                          <Feather name="home" color='#1d1d1d' size={20} />
                        ),
                      }}
                />

                <Tab.Screen
                     name="Ticket"
                     component={Tickets}
                     options={{
                        tabBarLabel: 'Tickets',
                        tabBarOptions: {
                            activeTintColor: '#000',
                            inactiveTintColor: '#fff',
                          },
                        tabBarIcon: ({ color, size }) => (
                            <Entypo name="ticket" size={20} color="#1d1d1d" />
                        ),
                      }}
                     />
                <Tab.Screen
                     name="Liked"
                     component={Liked}
                     options={{
                        tabBarLabel: 'Like',
                        tabBarOptions: {
                            activeTintColor: '#000',
                            inactiveTintColor: '#fff',
                          },
                        tabBarIcon: ({ color, size }) => (
                            <Entypo name="heart" size={24} color="black" />
                        ),
                      }}
                     />
            </Tab.Navigator>
        
  );
}





