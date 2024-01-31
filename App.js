import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/home';
import { MoviesCard } from './src/components/MoviesCard';

export default function App() {
  return (
    <>
      <Home></Home> 
      <StatusBar style="auto" />
    </>
  );
}
