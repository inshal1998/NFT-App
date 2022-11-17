import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { DetailDesc, DetailHeader, DetailsBid, FocusedStatusBar } from '../../components'
import { EthPrice, NFTTitle, RectBtn, SubInfoComp } from '../../components/SubInfoComp'
import { COLORS, FONTS, SIZES } from '../../assets/constants'

const Detail = () => {
  const getData = useRoute()
  // alert(JSON.stringify(getData.params.data , undefined , 4))
  return (
    <SafeAreaView style={{flex:1 , backgroundColor:COLORS.white}}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={{
        position:'absolute',
        bottom:0,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'rgba(255 , 255 , 255 , 0.5)',
        backgroundColor:'transparent',
        paddingVertical:SIZES.font,
        zIndex:1
      }}>
        <RectBtn fontSize={SIZES.font} minWidth={250} title={"Place Bids"}  />
      </View>
      <FlatList
        data={getData.params.data.bids}
        renderItem={({item , index})=><DetailsBid data={item}/>}
        keyExtractor={(item)=>item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:SIZES.extraLarge *3}}
        ListHeaderComponent={()=>(
          <React.Fragment>
            <DetailHeader data={getData.params.data}/>
            <SubInfoComp/>
            <View style={{padding:SIZES.font , marginVertical:SIZES.font ,alignItems:'center' , flexDirection:'row' , justifyContent:'space-between'}}>
              <NFTTitle title={getData.params.data.name} subTitle={getData.params.data.creator} titleSize={SIZES.extraLarge} subTitleSize={SIZES.small} />
              <EthPrice price={getData.params.data.price} />
            </View>
            <DetailDesc desc={getData.params.data.description} descSize={SIZES.small} />
            <Text style={{color:COLORS.primary , padding:SIZES.font , fontSize:SIZES.medium , fontFamily:FONTS.bold}}>Current Bid</Text>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  )
}

export default Detail

const styles = StyleSheet.create({})