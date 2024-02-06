import { FlatList ,Image, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { English } from "../../components/assets/movies/English.png";
import { MOVIESWATCHING } from "../../components/utils/moviesWatching";

export const Sugestions = () => {
  return(
    <View>
      <Text style={styles.titleText}>Assista em outros idiomas</Text>
      <Image style={styles.img} source={English}/>
    </View>
    

  )
}

const styles = StyleSheet.create({
  img: {
    marginLeft: 30
  },

  titleText:{
    fontSize: 18,
    fontWeight: "700",
    color: "#ffffff",
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10
  }
})