import React from 'react'
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

const EventDetail = ({route,navigation}) => {

  const {item} = route.params
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {/* image  */}
          <Image style={styles.imageStyle} source={item.image} alt={item.name} />
          {/* name , date  */}
          <Text style={styles.nameStyle}>{item.name}</Text>
          <Text style={styles.dateStyle}>From {item.dateStart} to {item.dateEnd}</Text>
          {/* Description  seat price */}
          <Text style={styles.descriptionStyle}>{item.description}</Text>
          <Text style={styles.seatsStyle}>Seats remaining {item.sheets}</Text>
          <Text style={styles.venueStyle}>Venue: {item.venue}</Text>
          <Text style={styles.priceStyle}>Ticket Price {item.ticketPrice}</Text>
          {/* book now  */}
          <View style={styles.pressableContainer}>
            <Pressable style={styles.buttonStyle}><Text style={{padding: 2}}>Book Now</Text></Pressable>
          </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 300,
    resizeMode: 'cover',
  },
  nameStyle: {
    marginTop: 10,
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center'
  },
  dateStyle: {
    fontSize: 20,
    textAlign: 'center'
  },
  descriptionStyle: {
    marginTop: 18,
    fontSize: 22,
    textAlign: 'center'
  },
  seatsStyle: {
    marginTop: 8,
    fontSize: 20,
    textAlign: 'center'
  },
  priceStyle: {
    marginTop: 8,
    fontSize: 20,
    textAlign: 'center'
  },
  venueStyle: {
    marginTop: 8,
    fontSize: 20,
    textAlign: 'center'
  },
  buttonStyle: {
    width: 100,
    marginTop: 18,
    fontSize: 20,
    alignItems: 'center',
    borderWidth: 2
  },
  pressableContainer :{
    width: Dimensions.get('window').width,
    alignItems: 'center'
  }
})

export default EventDetail