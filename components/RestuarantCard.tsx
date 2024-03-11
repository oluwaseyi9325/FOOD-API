import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function RestuarantCard({resturant}:any) {
  return (
   <TouchableOpacity>
    <View className='mr-6 bg-white rounded-3xl'>
    <Image className='h-36 w-64 rounded-t-3xl' source={require("../assets/images/burger-p.jpg")}/>
    <View className='px-3 pb-4 space-y-2'>
        <Text className='text-lg font-bold pt-2'>Seyi Adedokun</Text>
        <View className='flex-row items-center space-x-1'>
            <Image className='h-6 w-4' source={require("../assets/images/download.jpeg")}/>
            <Text className='text-green-700'>4</Text>
            <Text className='text-gray-700'>
                <Text className='font-semibold'>Enerdy Food</Text>
            </Text>
        </View>
    </View>
    </View>
   </TouchableOpacity>
  )
}