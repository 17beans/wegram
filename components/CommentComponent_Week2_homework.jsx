import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {
  Container,
  Header,
  Content,
  Left,
  Icon,
  Body,
  Right,
  Button,
  List,
  ListItem,
  Item,
  Input,
  Thumbnail,
} from 'native-base';



const width = Dimensions.get('screen').width;

export default function CommentComponent({content}) {
  return (
    <ListItem avatar style={{width:width}}>
      <Left>
        <Thumbnail source={{uri:content.image}} />
      </Left>
      <Body>
        <Text>{content.title}</Text>
        <Text note>{content.desc}</Text>
      </Body>
      <Right>
        <Text>10:03 am</Text>
      </Right>
    </ListItem>
  );
}