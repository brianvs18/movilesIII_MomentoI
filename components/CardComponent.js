import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const CardComponent = () => {
    return (
        <View style={cardStyles.cardBanner}>            
            <Text style={{color: "#fafafa", marginLeft: 20, marginTop: 10}}>Móviles III - 7:30 - 10:30</Text>
            <Text style={{color: "#fafafa", marginLeft: 20}}>Grupo 3 - Sábado</Text>
            <Image source={require("../assets/logo.png")} style={cardStyles.Banner}></Image>
        </View>
    );
}
const cardStyles = StyleSheet.create({
    cardBanner: {                
        backgroundColor: "#2e5fed",// 2e5fe8 2e5fed
        height: 80,
        width:300,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10
    },
    Banner:{
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        height: 78,
        width: 145,
        marginLeft: 150,
        marginTop: 1.5,
        marginRight: 10        
    }
});

export default CardComponent;