import { TouchableOpacity, StyleSheet, Text, View } from "react-native"
import PrimeVideoLogo from "../../components/assets/prime_video.png";
import AmazonLogo from "../../components/assets/amazon_logo.png";
import MovieTheWhell from "../../components/assets/movies/whell_of_time.png";

export const Home = () => {
  return <View style={styles.container}>
    <View style={styles.header}>

      <Image style={styles.primeLogoImg} source={PrimeVideoLogo} />
      <Image style={styles.amazonLogoImg} source={AmazonLogo} />

    </View>
    <View style={styles.category}>
      <TouchableOpacity>
        <Text style={styles.categoryText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.categoryText}>TV Shows</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.categoryText}>Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.categoryText}>Kids</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={MovieImageThumbnail}>
      <Image  source={MovieTheWhell} style={MovieImage}/>
    </TouchableOpacity>

  </View>
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#232F3E",
  },

  header: {
    width: "100%",
    paddingTop: 80,
    alignItems: center,
    justifyContent: center,
  },

  amazonLogoImg: {
    marginTop: -32,
    marginLeft: 30,
  },

  category: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    marginBottom: 15,
  },

  categoryText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#ffffff",
  },

  MovieImageThumbnail: {
    width: "100%",
    alignItems: "center",
  },
});