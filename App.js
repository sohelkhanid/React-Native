import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{width: 350, height: 50, backgroundColor: 'powderblue'}}>
		<Text>This is powderblue and its color code is #B0E0E6</Text>
		</View>
        <View style={{width: 350, height: 50, backgroundColor: 'skyblue'}}>
		<Text>This is skyblue and its color code is #87CEEB</Text>
		</View>
        
        <View style={{width: 350, height: 50, backgroundColor: 'teal'}} >
		<Text>This is teal and its color code is #008080</Text>
		</View>
        <View style={{width: 350, height: 50, backgroundColor: 'powderblue'}}>
		<Text>This is powderblue and its color code is #B0E0E6</Text>
		</View>
        <View style={{width: 350, height: 50, backgroundColor: 'skyblue'}}>
		<Text>This is skyblue and its color code is #87CEEB</Text>
		</View>
        
        <View style={{width: 350, height: 50, backgroundColor: 'teal'}} >
		<Text>This is teal and its color code is #008080</Text>
		</View>
        <View style={{width: 350, height: 50, backgroundColor: 'powderblue'}}>
		<Text>This is powderblue and its color code is #B0E0E6</Text>
		</View>
        <View style={{width: 350, height: 50, backgroundColor: 'skyblue'}}>
		<Text>This is skyblue and its color code is #87CEEB</Text>
		</View>
        
        <View style={{width: 350, height: 50, backgroundColor: 'teal'}} >
		<Text>This is teal and its color code is #008080</Text>
		</View>
        <View style={{width: 350, height: 50, backgroundColor: 'powderblue'}}>
		<Text>This is powderblue and its color code is #B0E0E6</Text>
		</View>
        <View style={{width: 350, height: 50, backgroundColor: 'skyblue'}}>
		<Text>This is skyblue and its color code is #87CEEB</Text>
		</View>
        
        <View style={{width: 350, height: 50, backgroundColor: 'teal'}} >
		<Text>This is teal and its color code is #008080</Text>
		</View>
        
        
      	</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7F50',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
