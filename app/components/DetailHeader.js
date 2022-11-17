import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CircleBtn from './CircleBtn'
import { assets } from '../assets/constants'
import { useNavigation } from '@react-navigation/native'

const DetailHeader = ({data}) => {
  const navigation = useNavigation()
  return (
    <View style={{
        width:'100%',
        height:373,
    }}>
        <Image
            source={data.image}
            resizeMode="cover"
            style={{
                height:'100%',
                width:'100%',
            }}
        />
        <CircleBtn left={15} top={StatusBar.currentHeight+10}  imgUrl={assets.left} handlePress={navigation.goBack} />
        <CircleBtn right={15} top={StatusBar.currentHeight+10}  imgUrl={assets.heart} />
    </View>
  )
}

export default DetailHeader

const styles = StyleSheet.create({})