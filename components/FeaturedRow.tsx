import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import RestuarantCard from './RestuarantCard'

export default function FeaturedRow({item}:any) {
  return (
    <View>
     <View className='flex-row justify-between items-center px-4'>
    <View>
      <Text className='font-bold text-lg'>Hot and Spicy</Text>
      <Text className='text-gray-500 text-xs'>Soft and tender friend chicken</Text>

    </View>
    <TouchableOpacity>
      <Text style={{color:themeColors.text}}>See All</Text>
    </TouchableOpacity>
     </View>
     <ScrollView className='overflow-visible py-5' horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
      paddingHorizontal:15
     }}>
          {
            [1,2,3,4,4].map((resturant,index)=>{
              return(
                <RestuarantCard key={index} resturant={resturant}/>
              )
            })
          }
     </ScrollView>
    </View>
  )
}