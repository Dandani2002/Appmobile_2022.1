import { View , StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

export const Comp2 = () => {
  const [isPlayed, setIsPlayed] = useState(false);

  const handleClick = () => {
    setIsPlayed(!isPlayed);
  };

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "top",
      alignItems: "center",
      flex: 1,
      backgroundColor: "#eaeaea"

    }
  });
 

  return (
    <View style={styles.container}>
      {isPlayed ? (
        <AntDesign onPress={handleClick} size={72} name="pause" />
      ) : (
        <AntDesign onPress={handleClick} size={72} name="play" />
      )}
    </View>
     
  );
  
};