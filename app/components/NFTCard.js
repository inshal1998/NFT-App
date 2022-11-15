import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SHADOWS , SIZES , assets } from "../assets/constants";
import {CircleBtn} from '../components';
import { EthPrice, NFTTitle, RectBtn, SubInfoComp } from './SubInfoComp';
const NFTCard = ({data}) => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={{width:'100%' , height:250}}>
        <Image
            source={data.image}
            resizeMode="cover"
            style={{
                width:'100%',
                height:'100%',
                borderTopLeftRadius:SIZES.font,
                borderTopRightRadius:SIZES.font
            }}
        />
        <CircleBtn imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfoComp/>
      <View style={{width:'100%' , padding:20}}>
        <NFTTitle title={data.name} subTitle={data.creator} titleSize={SIZES.large} subTitleSize={SIZES.small} />
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
        }}>
            <EthPrice price={data.price} />
            <RectBtn title={"Place a Bid"} minWidth={120}  fontSize={SIZES.font} handlePress={()=>{navigation.navigate("Detail" , {data})}} />
        </View>
      </View>
    </View>
  )
}

export default NFTCard

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.white,
        borderRadius:SIZES.font,
        marginBottom:SIZES.extraLarge,
        margin:SIZES.base,
        ...SHADOWS.dark
    }
})