import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

import { categoryData } from '../components/data'

const ScrollComp = ({clickCategory,handlePress}) => {
  return (
    <View style={styles.scrollViewContainer}>
    <ScrollView contentContainerStyle={styles.scrollviewstyle} horizontal={true} showsHorizontalScrollIndicator={false}>
      {categoryData.map((icon)=> 
        <Pressable key={icon.id} onPress={()=>handlePress(icon.name)}>
          <View style={clickCategory === icon.name ? styles.imageContainerblack : styles.imageContainergray}>
            <Image style={styles.imageStyle} source={icon.image} alt={icon.name} />
          </View>
        </Pressable>
      )}
    </ScrollView>
  </View>
  )
}


const styles = StyleSheet.create({
    imageStyle: {
        width: 45,
        height: 45,
      },
      scrollviewstyle:{
        gap: 20,
      },
      scrollViewContainer: {
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
      },
      imageContainergray: {
        borderBottomColor: 'rgb(226 232 240)',
        borderBottomWidth: 6,
        paddingBottom: 10,
      },
      imageContainerblack: {
        borderBottomColor: '#1d1d1d',
        borderBottomWidth: 6,
        paddingBottom: 10,
      }
})

export default ScrollComp