import React, { useEffect } from 'react';
import { StyleSheet, Text,  } from 'react-native';
import {
	Body,
	Button,
	Container,
	Content,
	Icon,
	Input,
	Item,
	Left,
	List,
	ListItem,
	Right,
	Thumbnail,
} from 'native-base';
import ImageBlurLoading from 'react-native-image-blur-loading';
import CommentComponent from '../components/CommentComponent';

const data = require('../data.json')

export default function DetailPage({ navigation, route }) {
	useEffect(() => {
		navigation.setOptions({
			title: '디테일페이지',
			headerStyle: {
				backgroundColor: '#fff',
				shadowColor: '#fff',
			  },
			  headerTintColor: 'grey',
			  headerShown: true,
			  headerBackTitleVisible: false,
		})
	}, [])

	const content = route.params.content
	const comment = require('../comment.json')

	return (
		<Container>
			<Content contentContainerStyle={{
				alignItems:'center',
				marginTop:20,
			}}>
				<ImageBlurLoading
					withIndicator
					thumbnailSource={{uri:content.image}}
					source={{uri:content.image}}
					style={{ width: '90%', height: 200, borderRadius: 10 }}
				/>

				<Text style={{fontSize:28, alignSelf:'flex-start', margin:20, fontWeight:'bold'}}>{content.title}</Text>
				<Text style={{fontSize:16, alignSelf:'flex-start', marginLeft:20, }}>{content.desc}</Text>

				<Item style={{marginTop:40}}>
					<Input placeholder="댓글을 입력해 주세요" />
					<Button transparent>
						<Icon active name='paper-plane' />
					</Button>
				</Item>

				<List style={{marginBottom:25}}>
					{
						comment.comment.map((content, i) => {
							return (
								<CommentComponent content={content} key={i} />
							)
						})
					}
				</List>
			</Content>
		</Container>
  );
}

const styles = StyleSheet.create({});