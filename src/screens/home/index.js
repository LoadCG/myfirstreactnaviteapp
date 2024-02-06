import { Image, TouchableOpacity, StyleSheet, Text, View, FlatList } from "react-native"
import { MoviesCard } from "../../components/MoviesCard";
import { Sugestions } from "../../components/Sugestions"
import { MOVIESWATCHING } from "../../components/utils/moviesWatching";
//import PrimeVideoLogo from "../../components/assets/prime_video.png";
//import AmazonLogo from "../../components/assets/amazon_logo.png";
import AmazonLogo from "../../components/assets/Amazon_Prime_Video_logo.svg.png"
import MovieTheWhell from "../../components/assets/movies/wheel_of_time1.webp";


export const Home = () => {
  return <View style={styles.container}>
    <View style={styles.header}>

      <Image style={styles.amazonLogoImg} source={AmazonLogo} />

    </View>
    <View style={styles.category}>
      <TouchableOpacity>
        <Text style={styles.categoryText}>Página Inicial</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.categoryText}>Séries</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.categoryText}>Filmes</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.categoryText}>Infantil</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.MovieImageThumbnail}>
      <Image  source={MovieTheWhell} style={styles.MovieImage}/>
    </TouchableOpacity>
    
    <MoviesCard></MoviesCard>
    <Sugestions></Sugestions>
  </View>

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0E171E",
  },

  header: {
    width: "100%",
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },

  amazonLogoImg: {
    width: 160,
    height: 49,
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
    height: "maxContent",
  },

  MovieImage: {
    width: "100%",
    height: 200,
  },

  titleText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ffffff",
    marginTop: 15,
    marginLeft: 30,
  }
});