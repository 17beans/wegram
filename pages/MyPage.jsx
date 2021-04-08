import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  Container,
  Header,
  Content,
  Left,
  Icon,
  Right,
  Text,
  Button,
  Thumbnail,
} from 'native-base';
import CardComponent from '../components/CardComponent';
import ImageComponent from '../components/ImageComponent';
import HeaderComponent from '../components/HeaderComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';
const my = require('../assets/my.png');
const data = require('../data.json');
const imageWidth = Dimensions.get('window').width / 3;
import { logout, getMycardCnt, getMylikeCnt, getMycommentCnt, getUserInfo } from '../config/firebaseFunctions';

export default function MyPage({ navigation }) {
  const [MycardCnt, setMycardCnt] = useState('로딩 중...')
  const [MylikleCnt, setMylikeCnt] = useState('로딩 중...')
  const [MycommentCnt, setMycommentCnt] = useState('로딩 중...')
  const [AppRunCnt, setAppRunCnt] = useState('로딩 중...')
  const [userInfo, setUserInfo] = useState({
    email: '준비 중...',
    name: '준비 중...',
  })

  const logoutFunc = () => {
    logout(navigation);
  };

  useEffect(() => {
    getMycardCnt(setMycardCnt)
    getMylikeCnt(setMylikeCnt)
    getMycommentCnt(setMycommentCnt)
    getAppRunCnt()
    getUserInfo(setUserInfo)
  }, [])

  const getAppRunCnt = async() => {
    let cnt = await AsyncStorage.getItem('AppRunCnt')
    // console.log("cnt: ");
    // console.log(cnt+1);
    if (cnt == null) {
      console.log('cnt is null. set 1');
      AsyncStorage.setItem('AppRunCnt', '1')
      let cnt2 = await AsyncStorage.getItem('AppRunCnt')
      console.log(cnt2);
      setAppRunCnt(cnt2)
    } else {
      try {
        const sum = Number(cnt)+1
        await AsyncStorage.removeItem('AppRunCnt')
        const result = await AsyncStorage.setItem('AppRunCnt', String(sum))
        let cnt2 = await AsyncStorage.getItem('AppRunCnt')
        setAppRunCnt(cnt2)
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <HeaderComponent />
      <Content>
        <Thumbnail large source={my} style={styles.thumbnail} />
        <Text style={styles.myTitle}>{userInfo.name}</Text>
        <Text style={{ alignSelf: 'center' }}>{userInfo.email}</Text>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={logoutFunc}>
          <Text style={styles.logout}>로그아웃</Text>
        </TouchableOpacity>
        <Grid style={{ marginTop: 30 }}>
          <Col size={3} style={{ alignItems: 'center' }}>
            <Text style={styles.category}>작성한 글</Text>
            <Text style={styles.categoryContent}>{MycardCnt}</Text>
          </Col>
          <Col size={3} style={{ alignItems: 'center' }}>
            <Text style={styles.category}>작성한 댓글</Text>
            <Text style={styles.categoryContent}>{MycommentCnt}</Text>
          </Col>
          <Col size={3} style={{ alignItems: 'center' }}>
            <Text style={styles.category}>좋아요 누른 수</Text>
            <Text style={styles.categoryContent}>{MylikleCnt}</Text>
          </Col>
          <Col size={3} style={{ alignItems: 'center' }}>
            <Text style={styles.category}>방문 횟수</Text>
            <Text style={styles.categoryContent}>{AppRunCnt}</Text>
          </Col>
        </Grid>
        <Grid style={styles.imageWrap}>
          {data.diary.map((content, i) => {
            return <ImageComponent image={content.image} key={i} />;
          })}
        </Grid>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  thumbnail: { alignSelf: 'center', marginTop: 30 },
  myTitle: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
  },
  category: {
    fontWeight: '700',
    textAlign:'center',
  },
  categoryContent: { color: 'deeppink', fontWeight: '700' },
  imageWrap: { flexWrap: 'wrap', marginTop: 20 },
  logout: {
    alignSelf: 'center',
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
  },
});