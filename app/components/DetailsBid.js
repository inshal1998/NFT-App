import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EthPrice, SubInfoComp } from './SubInfoComp'
import { COLORS, FONTS, SIZES } from '../assets/constants'

const DetailsBid = ({data}) => {
  // alert(JSON.stringify(data , undefined , 4))
  return (
    <View style={{padding:SIZES.font, justifyContent:'space-between'  , flexDirection:'row'}}>
        <Image
          source={data.image}
          resizeMode='contain'
          style={{
            height:50,
            width:50,
          }}
        />
        <View style={{alignItems:'center' , justifyContent:'center'}}>
            <Text style={{color:COLORS.primary , fontFamily:FONTS.semiBold}}>Bid Palced By {data.name}</Text>
            <Text style={{color:COLORS.gray , fontFamily:FONTS.medium}}>{data.date}</Text>
        </View>
        <EthPrice price={data.price} />
    </View>
  )
}

export default DetailsBid

const styles = StyleSheet.create({})