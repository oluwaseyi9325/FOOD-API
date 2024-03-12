import { View, Text, ScrollView,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather"
import { themeColors } from '../theme'
import { StatusBar } from 'expo-status-bar'
export default function ResturantScreen() {
  const {params}=useRoute()
  const navigation=useNavigation()
  let item=params;
  console.log('resturant',item)
  return (
    <View>
        <StatusBar style='light'/>
      <ScrollView>
        <View className='relative'>
          <Image  className="w-full h-72" source={require("../assets/images/burger-p.jpg")}/>
          <TouchableOpacity onPress={()=>navigation.goBack()} className='absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow'>
            <Icon.ArrowLeft  strokeWidth={3} stroke={themeColors.bgColor(1)}/>
          </TouchableOpacity>
        </View>
        <View style={{borderTopLeftRadius:40,borderTopRightRadius:40}} className='bg-white -mt-12 pt-6'>
          <View className='px-5'>
            <Text className='font-bold text-3xl'>Papa Johns</Text>
          </View>
        </View>
    </ScrollView>
    </View>
  )
}