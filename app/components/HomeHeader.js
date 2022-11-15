import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { assets, COLORS, FONTS, SIZES } from '../assets/constants'

const HomeHeader = ({onSearch}) => {
  return (
    <View style={{
      backgroundColor:COLORS.primary,
      padding:SIZES.font
    }}>
      <View style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
      }}>
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{
            height:25,
            width:90
          }}
        />
        <View style={{height:35 , width:35}}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{
              height:'100%',
              width:'100%'
            }}
          />
          <Image
            source={assets.badge}
            style={{
              position:'absolute',
              height:20,
              width:20,
              bottom:-3,
              right:-2,
              zIndex:1
            }}
          />
        </View>
      </View>
      <View style={{
        marginTop:SIZES.font
      }}>
        <Text style={{color:COLORS.white , fontSize:SIZES.small , fontFamily:FONTS.medium}}>Hello Marie 👋 </Text>
        <Text style={{color:COLORS.white , fontSize:SIZES.extraLarge , fontFamily:FONTS.bold}}>Let's Find Masterpiece Art</Text>
      </View>
      <View style={{marginTop:SIZES.font}}>
        <View style={{
          flexDirection:'row',
          backgroundColor:COLORS.gray,
          alignItems:'center',
          paddingHorizontal:10,
          borderRadius:SIZES.font
        }}>
          <Image
            source={assets.search}
            style={{
              height:20,
              width:20,
              marginRight:10
            }}
          />
          <TextInput
            placeholder='Search NFT'
            onChangeText={onSearch}
            style={{
              flex:1
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({})