import React from 'react'
import { Button, Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'


import back from '../../assets/back.jpg'

const Welcome = ({ navigation }) => {

 

  return (
    <View style={styles.container}>
      <ImageBackground source={back} resizeMode='cover' style={styles.image}>
        <Text style={styles.text1}>Discover Events</Text>
        <Text style={styles.text2}>welcome to Eventonn. A very happening place where you can book various events in your city.</Text>
        
        {/* <Button
          title='Go To Homepage'
          onPress={()=> navigation.navigate("omepage")}
        /> */}
        <View style={styles.viewStyle}>
          <Pressable style={styles.button} onPress={()=> navigation.navigate("omepage")}><Text style={styles.text3}>GET STARTED</Text></Pressable>
        </View>
        </ImageBackground> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text1: {
    color: 'white',
    fontSize: 48,
    lineHeight: 84,
    fontWeight: 'bold',
    paddingLeft: 20,
    marginTop: 40,
  },
  text2: {
    color: 'white',
    fontSize: 18,
    lineHeight: 40,
    fontWeight: 'semibold',
    textAlign: 'left',
    paddingLeft: 20,
    paddingRight: 40,
  },
  text3: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'semibold',
    textAlign: 'center',
    paddingTop: 6,
  },
  button: {
    width: 150,
    height: 40,
    color: 'white',
    backgroundColor: 'black'
  },
  viewStyle: {
    
    alignItems: 'center',
  }
})

export default Welcome