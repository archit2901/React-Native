import React from 'react';
import {Text, StyleSheet ,View} from 'react-native';

const ComponentsScreen = () => {

    const hello = <Text style = {styles.teStyle}>My name is Archit Gupta</Text>;

    return (
        <View>
          <Text style={styles.textStyle}>Getting started with React Native!</Text>
          {hello}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    teStyle:{
        fontSize: 20
    }
});

export default ComponentsScreen;