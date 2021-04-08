import React from 'react';
import { StyleSheet,View,Text,Image,Demensions } from 'react-native';
import {Container, Content, Thumbnail} from 'native-base'

export default function Loading() {
	return (
		<Container style={styles.container}>
			<Content contentContainerStyle={styles.content}>
				<Thumbnail source={require('../assets/loading.gif')} large />
			</Content>
		</Container>

		// <View style={styles.Container}>
		// 	<Image style={styles.LoadImg} source={require('../assets/loading.gif')} />
		// </View>
	) 
}

const styles = StyleSheet.create({
	Thumb:{
		borderRadius:60,
	},
	container:{
		flex:1,
		backgroundColor:'pink',
	},
	content:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'transparent',
	},
	LoadImg:{
		width:100,
		height:100,
		backgroundColor:'gray',
		borderRadius:60,
	},
});