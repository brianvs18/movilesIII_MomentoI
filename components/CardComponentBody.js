import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CardComponentBody = () => {
    return (
        <View style={cardStyles.cardBody}>            
        </View>
    );
}
const cardStyles = StyleSheet.create({
    cardBody: {                
        backgroundColor: "#fafafa",
        height: 170,
        width:300
    }
});

export default CardComponentBody;