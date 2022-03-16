import React from "react";
import { StyleSheet, View, Text } from 'react-native';

export default function Comp1(){
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Metrônomo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "top",
        alignItems: "center",
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"
    },
      title: {
        marginTop: 20,
        paddingVertical: 4,
        borderWidth: 3,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#2786f2",
        color: "#20232a",
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold"
      }
    });
    