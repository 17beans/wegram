import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { Container, Content, Text, Thumbnail } from 'native-base';
import ImageComponent from '../components/ImageComponent';
import HeaderComponent from '../components/HeaderComponent';



const my = require('../assets/my.png');
const data = require('../data.json');

export default function MyPage() {
  return (
    <Container>
      <HeaderComponent />
      <Content>
        <Thumbnail large style={{width:120, height:120, borderRadius:100, alignSelf:'center', marginTop:40}} source={{uri:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMDNfMjE1%2FMDAxNjE0NzMyMDQwMjAw._f44M4Eq0VOSoVl0LXGzGnHFQkfCzvoaf8Xj5lLMQtwg.OWZJ4p_ilQlOXodoz09SSCDh-ftPG5fJLzpEmXBxV28g.JPEG.hyojinkim101%2FScreenshot%25A3%25DF20210303%25A3%25AD093930%25A3%25DFNAVER.jpg&type=sc960_832"}} />
		<Text style={{textAlign:'center', marginTop:20, fontWeight:'700', fontSize:20}}>17beans</Text>
		<Text style={{textAlign:'center', }}>https://blog.naver.com/17beans</Text>

		<Grid style={{marginTop:30}}>
			<Col>
				<Text style={styles.coltitle}>작성한 글</Text>
				<Text style={styles.coldesc}>7</Text>
			</Col>
			<Col>
				<Text style={styles.coltitle}>작성한 댓글</Text>
				<Text style={styles.coldesc}>7</Text>
			</Col>
			<Col>
				<Text style={styles.coltitle}>방문 횟수</Text>
				<Text style={styles.coldesc}>7</Text>
			</Col>
		</Grid>

		<Grid style={{marginTop:20, flexWrap:'wrap'}}>
			{data.diary.map((content, i) => {
				return (
					<ImageComponent image={content.image} key={i} />
				)
			})}
		</Grid>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
	coltitle:{
		textAlign:"center",
		fontWeight:'700',
	},
	coldesc:{
		textAlign:"center",
		fontWeight:'bold',
		color:"pink",
	},
});