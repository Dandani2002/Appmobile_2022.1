import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import { ImageBackground, SafeAreaView } from 'react-native-web';

import header from './src/assets/image1.jpeg';
import xbox from './src/assets/xbox.jpg';

export default function App() {
  return (
    <SafeAreaView >
      <ImageBackground blurRadius={1.5} source={header} style={styles.header}>
        <Text style={{color: "#FFF", fontSize: 50}}>Estácio</Text>
      </ImageBackground>
      <View style={styles.detailsView}>
        <Text>Xbox Series Xbox</Text>
        <Image source={xbox} style={{width: 50, height: 50}}></Image>
        <Image source={{uri: 'https://a-static.mlcdn.com.br/1500x1500/console-playstation-5-ps5-sony/magazineluiza/043079500/9d4f0cd7244929620b459cf9fd5e471c.jpg'}} style={{width: 50, height: 50}}/>
        <Text>Sony</Text>
        <Text>Lorem ipsum dolor sit amet conseqt adiscipli elit</Text>
        <Text>R$ 4.000,00</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width:'100%', 
    height: 300, 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  detailsView: {
    paddingVertical: 10,
    paddingHorizontal: 10
  }
});
