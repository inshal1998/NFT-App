import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SIZES } from '../assets/constants'

const DetailDesc = ({desc , descSize}) => {
    const [read, setread] = useState(false)
    return (
    <View style={{padding:SIZES.font}}>
      <Text style={{color:COLORS.primary , fontFamily:FONTS.bold , fontSize:SIZES.large , marginBottom:SIZES.small}}>Description</Text>
      <Text style={{color:COLORS.primary , fontFamily:FONTS.medium , fontSize:descSize , lineHeight:20 }}>
        {read ? desc.slice(0,100) : desc}
        <Text style={{fontFamily:FONTS.bold , color:COLORS.primary , fontSize:descSize , borderWidth:1}} onPress={()=>{
           setread(!read) 
        }}>{read ? " Read More ...." :" Read Less"} </Text>
      </Text>
    </View>
  )
}

export default DetailDesc

const styles = StyleSheet.create({})