import { View, Text, TouchableOpacity, Image,StyleSheet } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather"
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
export default function RestuarantCard({resturant}:any) {
    const navigation:any =useNavigation()
  return (
   <TouchableOpacity onPress={()=>navigation.navigate(["Resturant",{...resturant}])}>
    <View style={styles.card} className='mr-6 bg-white  rounded-3xl mt-3'>
    <Image className='h-36 w-64 rounded-t-3xl' source={require("../assets/images/burger-p.jpg")}/>
    <View className='px-3 pb-4 space-y-2'>
        <Text className='text-lg font-bold pt-2'>Seyi Adedokun</Text>
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
    </View>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    card: {
    elevation: 5,
    shadowRadius: 7,
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 12,
    marginBottom: 16,
    shadowColor:"black"
    }
})