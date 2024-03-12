import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ResturantScreen from './screens/ResturantScreen';
const Stack = createStackNavigator();
export default function Navigation() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Resturant' component={ResturantScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}