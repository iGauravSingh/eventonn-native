
import { FlatList, StyleSheet, Text, View } from 'react-native'

import { eventOngoingData } from './data'
import EventCard from './EventCard'

const EventList = ({clickCategory,city='all'}) => {

    let newData = eventOngoingData

    

    if(clickCategory === 'all' && city === 'all'){
        newData = eventOngoingData
    } else if (clickCategory !== 'all' && city === 'all'){
        newData = eventOngoingData.filter(item=> item.category === clickCategory)
    } else if(clickCategory !== 'all' && city !== 'all'){
        newData = eventOngoingData.filter(item => item.category === clickCategory && item.city === city)
        if(!newData.length){
            return (
                <Text>No {clickCategory} event in {city}.</Text>
            )
        }
    } else {
        return (
            <Text>unknown Error.</Text>
        )
    }

  return (
    <View style={styles.flastListContainer}>
        <FlatList 
            horizontal style={styles.flatListStyle}
            data={newData}
            renderItem={({ item })=> <EventCard item={item} />}
            keyExtractor={item=> item.id}
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}


const styles = StyleSheet.create({
    flastListContainer : {
        marginTop: 20,
    },
    flatListStyle: {
        
    }
})

export default EventList