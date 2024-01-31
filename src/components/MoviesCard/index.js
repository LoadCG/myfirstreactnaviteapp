import { Image, TouchableOpacity, StyleSheet, Text, View } from "react-native"
import DarkKnight from "../../components/assets/movies/dark-knight.png"


export const MoviesCard = () => {
  return(
    <View>
      <Text style={styles.titleText}>Continuar Assistindo</Text>
      <Image style={styles.img} source={DarkKnight}/>
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