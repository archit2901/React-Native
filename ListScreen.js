import React from 'react';
import { View , Text , StyleSheet ,FlatList} from 'react-native';

const ListScreen = () => {

    const friends = [
        { name : 'Friend #1' , age : 20 },
        { name : 'Friend #2' , age : 45 },
        { name : 'Friend #3' , age : 32 },
        { name : 'Friend #4' , age : 78 },
        { name : 'Friend #5' , age : 42 },
        { name : 'Friend #6' , age : 19 },
        { name : 'Friend #7' , age : 18 },
        { name : 'Friend #8' , age : 21 },
        { name : 'Friend #9' , age : 25 }
    ];
    return (
        <FlatList 
            //horizontal
            //showsHorizontalScrollIndicator = {false}
            keyExtractor = {(friend) => friend.name }
            //keyExtractor = {(friend) => friend.age }
            data={friends} 
            renderItem = { ({item}) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
            }}
        />
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical : 50
    }
});

export default ListScreen;