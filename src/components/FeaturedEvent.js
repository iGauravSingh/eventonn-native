
import { Dimensions, Image, StyleSheet, Text, View } from "react-native"
import { eventOngoingData } from "./data"

const FeaturedEvent = () => {

    const data = eventOngoingData[0]
  return (

    <View>
        <Text style={styles.featuredHeading}>Featured Event</Text>
        <Image style={styles.featuredBanner} source={data.image} alt={data.title} />
    </View>
  )
}

const styles = StyleSheet.create({
    featuredHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 8,
        marginLeft: 18
    },
    featuredBanner: {
        width: Dimensions.get('window').width,
        height: 280,
        resizeMode: "cover",
        marginBottom: 10,
    }

})

export default FeaturedEvent