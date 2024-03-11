import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather"
import { SafeAreaView } from 'react-native-safe-area-context'
export default function HomeScreen() {
  return (
    <SafeAreaView className='bg-white '>
   <StatusBar style='dark'/>
   <View className='flex-row items-center  space-x-2 px-4 pb-2'>
    <View className='flex-row items-center p-3 rounded-full border border-gray-300'>
        <Icon.Search height="25" width="23" stroke="gray" />
        <TextInput placeholder='Restaurants..' className='ml-2 flex-1' />
        <View className='flex-row items-center space-x-1 border-0 border-l-2'>
            <Icon.MapPin height="20" width="20"/>
        </View>
    </View>
   </View>
    </SafeAreaView>
  )
}