import React, { useState } from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'


import ScrollComp from '../components/ScrollComp'
import EventList from '../components/EventList'
import FeaturedEvent from '../components/FeaturedEvent'


const HomePage = () => {
  
  const [clickCategory, setClickCategory] = useState('all')


  const handlePress =(category)=>{
    setClickCategory(category)
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <Text style={styles.heading}>Find your event</Text>
      </View>
        {/* category Selector  */}

        <ScrollComp clickCategory={clickCategory} handlePress={handlePress} />

        {/* Event List and Event Selector  */}

        <EventList clickCategory={clickCategory}  />

        {/* Featured event  */}

        <FeaturedEvent />

    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  heading: {
    fontSize: 38,
    fontWeight: 'bold',
    marginLeft: 18,
  },
  categoryStyle: {
    marginLeft: 18,
    marginTop: 12,
    fontSize: 18,
    color: 'gray'
  },

})



export default HomePage