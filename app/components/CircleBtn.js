import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS, SIZES } from '../assets/constants'

const CircleBtn = ({imgUrl , handlePress , ...props}) => {
  return (
    <TouchableOpacity style={{
        width:40,
        height:40,
        alignSelf:'flex-end',
        backgroundColor:COLORS.white,
        position:'absolute',
        borderRadius:SIZES.extraLarge,
        alignItems:'center',
        justifyContent:'center',
        ...SHADOWS.light,
        ...props
    }}
    onPress={handlePress}
    >
        <Image
            source={imgUrl}
            resizeMode="contain"
            style={{
                height:24,
                width:24,
            }}
        />
    </TouchableOpacity>
  )
}

export default CircleBtn

const styles = StyleSheet.create({})