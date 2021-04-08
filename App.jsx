import React, { useState, useEffect } from 'react';
import { StyleSheet, LogBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigations/StackNavigator';

import Loading from './pages/Loading';

//파이어베이스 라이브러리 불어오기!
import * as firebase from 'firebase';
//파이어베이스 접속 키값 가져오기
import apiKeys from './config/key';

export default function App() {
  LogBox.ignoreLogs(['Setting a timer']);
  LogBox.ignoreAllLogs();

  const [ready, setReady] = useState(true);

  //파이어베이스 라이브러리가 준비 되면 연결하는 조건문!
  if (!firebase.apps.length) {
    console.log('Connected with Firebase');
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  useEffect(() => {
  }, []);

  return ready ? (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  ) : (
    <Loading />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});