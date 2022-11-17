import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../assets/constants'

export const SubInfoComp = () => {
  return (
    <View style={{
        width:'100%',
        paddingHorizontal:SIZES.font,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:-SIZES.extraLarge
    }}>
        <People/>
        <EndDate/>
    </View>
  )
}

export const EndDate = () => {
  return (
    <View style={{
        paddingHorizontal:SIZES.font,
        paddingVertical:SIZES.base,
        backgroundColor:COLORS.white,
        justifyContent:'center',
        alignItems:'center',
        ...SHADOWS.light,
        elevation:1,
        maxWidth:'50%',
        borderRadius:SIZES.font
    }}>
        <Text style={{color:COLORS.primary , fontFamily:FONTS.regular , fontSize:SIZES.small}}>Ending in</Text>
        <Text style={{color:COLORS.primary , fontFamily:FONTS.semiBold , fontSize:SIZES.medium}}>12h 30m</Text>
    </View>
  )
}

export const NFTTitle = ({title , subTitle , titleSize , subTitleSize}) => {
  return (
    <View style={{marginTop:-SIZES.font}}>
      <Text style={{color:COLORS.primary , fontSize:titleSize , fontFamily:FONTS.bold}}>{title}</Text>
      <Text style={{color:COLORS.gray , fontSize:subTitleSize , fontFamily:FONTS.light}}>{subTitle}</Text>
    </View>
  )
}

export const EthPrice = ({price}) => {
  return (
    <View style={{flexDirection:'row' ,alignItems:'center'}}>
      <Image
        source={assets.eth}
        style={{
            height:20,
            width:20,
            marginRight:5
        }}
        resizeMode='contain'
      />
      <Text style={{color:COLORS.primary , fontFamily:FONTS.regular}}>{price}</Text>
    </View>
  )
}

export const RectBtn = ({title , minWidth , fontSize ,handlePress , props})=>(
        <TouchableOpacity onPress={handlePress} style={{backgroundColor:COLORS.primary , padding:SIZES.small ,  minWidth:minWidth  ,  borderRadius:SIZES.extraLarge , alignItems:'center' , ...props}}>
            <Text style={{color:COLORS.white , fontSize:fontSize}}>{title}</Text>
        </TouchableOpacity>
)

export const People = () => {
  return (
    <View style={{flexDirection:'row'}}>
        {
            [assets.person01 , assets.person02 , assets.person03 ,assets.person04].map((item , index)=>(
                <ImgComp imgUrl={item}index={index} key={`People ${index}`} />
            ))
        }
    </View>
  )
}

export const ImgComp = ({imgUrl , index }) => {
  return (
    <Image
        source={imgUrl}
        resizeMode="contain"
        style={{
            height:45,
            width:45,
            marginLeft:index === 0 ? 0 : -SIZES.font
        }}
    />
  )
}
