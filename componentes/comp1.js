import React from "react";
import { StyleSheet, View, Text } from 'react-native';

export default function Comp1(){
    return(
        <View styles={styles.container}>
        <Text styles={styles.title}>Metrônomo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 100% 
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"
    },
      title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
      }
    });
    