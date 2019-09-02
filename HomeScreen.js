import React from 'react';
import { Text, StyleSheet ,View , Button , TouchableOpacity} from 'react-native';

const HomeScreen = ({ navigation }) => {
  //console.log(props.navigation);
  return (  
    <View>
      <Text style={styles.text}>hello Archit , welcome to your first app</Text>
      <Button 
        title = "For Components press me"
        onPress = {() => navigation.navigate("Components")} 
      />
      <Button
        title = "List : Press me"
        onPress = {() => navigation.navigate("List")}
      />
      <Button
        title = "image screen"
        onPress = {() => navigation.navigate("Image")}
      />
       <Button
        title = "Counter screen"
        onPress = {() => navigation.navigate("Counter")}
      />
      <Button
        title = "Color screen"
        onPress = {() => navigation.navigate("Color")}
      />
      <Button
        title = "Square screen"
        onPress = {() => navigation.navigate("Square")}
      />
      <Button
        title = "Text screen"
        onPress = {() => navigation.navigate("Text")}
      />
      {/* <TouchableOpacity onPress = {() => props.navigation.navigate("List")}>
        <Text>Helllooo my friend </Text>
        <Text>Helllooo my friend </Text>
        <Text>Helllooo my friend </Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;