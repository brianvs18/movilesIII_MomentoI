import React, {useState} from 'react';
import {StyleSheet, View, Image, TouchableHighlight, Text, Dimensions, Alert} from 'react-native';

const pressMe = () =>{
    Alert.alert("Ventana Emergente");
  }

const CardComponentFooter = () => {
    return (
        <View style={cardStyles.cardBody}>            
            <TouchableHighlight style={cardStyles.bottonFolder} onPress={pressMe}>                
                <Image source={require("../assets/carpeta.png")} style={cardStyles.icons}></Image>
            </TouchableHighlight>
            <TouchableHighlight style={cardStyles.iconG}>
                <Image source={require("../assets/ganancias.png")} style={cardStyles.icons}></Image>
            </TouchableHighlight>
        </View>
    );
}
const cardStyles = StyleSheet.create({
    cardBody: {
        backgroundColor: "#fafafa",
        height: 50,
        width:300,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        borderTopWidth: 1,
        borderColor: "#e0e0e0"
    },
    bottonFolder: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",     
        backgroundColor: "#fafafa",
        marginTop: 7,        
        marginLeft: 250,
        height: Dimensions.get("screen").height*0.035,
        width: Dimensions.get("screen").width*0.08
    },
    iconG: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fafafa",
        marginTop: 7,        
        marginLeft: 210,
        height: Dimensions.get("screen").height*0.035,
        width: Dimensions.get("screen").width*0.08
    },
    icons:{
        width: 27,
        height: 27
    }
});

export default CardComponentFooter;