import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import * as Icon from "react-native-feather"
export default function DishRow() {
  return (
    <View className='flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2'>
      <Image className="rounded-3xl" style={{height:100,width:100}} source={require("../assets/images/burger.jpeg")}/>
      <View className='flex flex-1 space-y-3'>
        <Text className='text-xl'>Pizza</Text>
        <Text className='text-gray-700'>Soft and tender friend chicken</Text>
      </View>
      <View className='flex-row justify-between pl-3 items-center'>
        <Text className='text-gray-700 text-lg font-bold'>$20</Text>
        <View className='flex-row items-center'>
            <TouchableOpacity className='p-1 rounded-full' style={{backgroundColor:themeColors.bgColor(1)}}></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}