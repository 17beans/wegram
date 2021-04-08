import * as firebase from "firebase";
import "firebase/firestore";
import {
  Alert
} from "react-native";

export async function registration(nickName, email, password, navigation) {
  try {
    console.log(nickName, email, password)
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;
    const db = firebase.firestore();
    db.collection("users")
      .doc(currentUser.uid)
      .set({
        email: currentUser.email,
        nickName: nickName
      });
    Alert.alert("회원가입 성공!")
    navigation.push("TabNavigator")

  } catch (err) {
    Alert.alert("무슨 문제가 있는 것 같아요! => ", err.message);
  }
}

export async function signIn(email, password, navigation) {
  try {

    await firebase.auth().signInWithEmailAndPassword(email, password)
    
    console.log("========================================");
    console.log("firebaseFunctions_signIn");
    console.log("currentUser:");
    console.log(firebase.auth().currentUser);
    console.log("========================================");

    navigation.push("TabNavigator")

  } catch (err) {
    Alert.alert('로그인에 문제가 있습니다! ', err.message);
  }
}

export async function signOut(navigation) {
    try {
        console.log("========================================");
        console.log("firebaseFunctions_signOut");
        console.log("로그아웃 전 currentUser:");
        console.log(firebase.auth().currentUser);
        console.log("========================================");

        await firebase.auth().signOut()
        
        console.log("========================================");
        console.log("firebaseFunctions_signOut");
        console.log("로그아웃 후 currentUser:");
        console.log(firebase.auth().currentUser);
        console.log("========================================");

        navigation.push("SignInPage")
        
    } catch (error) {
        Alert.alert('로그아웃에 문제가 있습니다.! ' + error.message)

        console.log("========================================");
        console.log("firebaseFunctions_error");
        console.log("error");
        console.log(error.message);
        console.log("========================================");
    }
}