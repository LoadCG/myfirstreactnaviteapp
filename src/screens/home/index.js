import { StyleSheet, Text, View } from "react-native"
import PrimeVideoLogo from "../../components/assets/prime_video.png";
import AmazonLogo from "../../components/assets/amazon_logo.png";

export const Home = () => {
  return <View style={styles.container}>
    <View style={styles.header}>

      <Image style={styles.primeLogoImg} source={PrimeVideoLogo} />
      <Image style={styles.amazonLogoImg} source={AmazonLogo} />

    </View>
  </View>
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#232F3E"
  },

  header: {

  },
});