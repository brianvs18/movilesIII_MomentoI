import React, {useState} from 'react';
import {StyleSheet, View, TouchableHighlight, Image} from 'react-native';

import CardComponent from './components/CardComponent';
import CardComponentBody from './components/CardComponentBody';
import CardComponentFooter from './components/CardComponentFooter';
const App = () =>{
  return (
    <View style={styles.container}>
      <View style={styles.cardBox}>
        <CardComponent></CardComponent>
        <CardComponentBody></CardComponentBody>
        <CardComponentFooter></CardComponentFooter>
      </View>
      <View style={styles.cardBox}>
        <CardComponent></CardComponent>
        <CardComponentBody></CardComponentBody>
        <CardComponentFooter></CardComponentFooter>
      </View>
      <View style={styles.cardBox}>
        <CardComponent></CardComponent>
        <CardComponentBody></CardComponentBody>
        <CardComponentFooter></CardComponentFooter>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
    marginTop: 25
  },
  cardBox:{    
    backgroundColor: 'white',    
    alignItems : 'center',
    justifyContent: 'center',
    height: 303,
    width: 303,
    borderRadius: 12,    
    borderWidth: 1,
    borderColor: "#e0e0e0",
    marginTop: 3
  }
});

export default App;