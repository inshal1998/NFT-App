import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FocusedStatusBar , NFTCard , HomeHeader } from "../../components";
import { COLORS,NFTData } from "../../assets/constants";
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{flex:1}}>
          <View style={{zIndex:0}}>
            <FlatList
              data={NFTData}
              renderItem={({item})=><NFTCard data={item} />}
              keyExtractor={item=>item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={()=><HomeHeader/>}
            />
          </View>
          <View style={{position:'absolute' , top:0 , bottom:0 , right:0 , left:0 , zIndex:-1 , backgroundColor:COLORS.white}}>
            <View style={{height:300 , backgroundColor:COLORS.primary , borderBottomRightRadius:20 , borderBottomLeftRadius:20}}/>
            <View style={{flex:1 , backgroundColor:COLORS.white}}/>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})