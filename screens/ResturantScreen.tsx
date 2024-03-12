import { View, Text, ScrollView,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather"
import { themeColors } from '../theme'
import { StatusBar } from 'expo-status-bar'
import DishRow from '../components/DishRow'
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
            <View className='flex-row space-x-2 my-1'>
            <View className='flex-row items-center space-x-1'>
            <Image className='h-6 w-4' source={require("../assets/images/star.jpeg")}/>
            <Text className='text-green-700'>4</Text>
            <Text className='text-gray-700'>| 400k- review 
                <Text className='font-semibold'>| Feast Food</Text>
            </Text>
        </View>
        <View className='flex-row items-center space-x-1'>
           <Icon.MapPin color="gray" width="15" height="15"/> 
        <Text className='text-gray-700 text-sm'>Nearby - 3526 Lagos,Ikeja.</Text>
        </View>
            </View>
            <Text className='text-gray-500 mt-2'>Soft and tender friend chicken</Text>
          </View>
        </View>
        <View className='pb-36 bg-white'>
          <Text className='px-4 text-2xl font-bold'>Menu</Text>
          {
            [1,2,2,3].map((item,i)=>{
              return(
               
<DishRow key={i}/>
              
              )
            })
          }
        </View>
    </ScrollView>
    </View>
  )
}