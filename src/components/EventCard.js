import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

const EventCard = ({item}) => {

    const navigation = useNavigation()
     
  return (
    <Pressable style={styles.cardStyle} onPress={()=>navigation.navigate('EventDetail',{item})}>
        <View>
            <Image style={styles.imageStyle} source={item.image} alt={item.name} />
        </View>
        <Text>{item.name}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 150,
        height: 180,
    },
    cardStyle: {
        marginLeft: 10,
        marginRight: 5,
    }
})

export default EventCard