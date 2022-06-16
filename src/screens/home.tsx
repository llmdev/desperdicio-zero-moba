import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Image,
} from "react-native";
import { CardButton } from "../components/cardButton/cardButton";
import { Header } from "../components/header/header.components";
import { ServiceWrapper, NoticeWrapper } from "./home.style";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import { NoticeCard } from "../components/noticeCard/noticeCard";

const notices = [
  {
    key: 1,
    title: "Sabesp implanta nova coleta de esgoto",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    img: img1,
    link: "/notice1",
  },
  {
    key: 2,
    title: "Limpeza nos rios e lagos",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    img: img2,
    link: "/notice2",
  },
  {
    key: 3,
    title: "Sabesp implanta nova coleta de esgoto",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    img: img1,
    link: "/notice1",
  },
  {
    key: 4,
    title: "Limpeza nos rios e lagos",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    img: img2,
    link: "/notice2",
  },
];

export function Home({ navigation }) {
  return (
    <View>
      <Header navigation={navigation} />
      <Text
        style={StyleSheet.create({
          fontSize: 24,
          paddingLeft: 10,
          marginTop: 32,
          fontWeight: "bold",
        })}
      >
        Serviços
      </Text>
      <ServiceWrapper>
        <CardButton onPress={() => navigation.jumpTo('Reportar Vazamento')}>Reportar vazamento</CardButton>
        <CardButton>Alerta de inundação</CardButton>
        <CardButton>Nível dos reservatórios</CardButton>
      </ServiceWrapper>
      <Text
        style={StyleSheet.create({
          fontSize: 24,
          paddingLeft: 10,
          marginTop: 32,
          fontWeight: "bold",
          marginBottom: 20
        })}
      >
        Notícias
      </Text>
      <NoticeWrapper>
        <FlatList
          data={notices}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return (
              <NoticeCard
                image={item.img}
                title={item.title}
                descrition={item.content}
              />
            );
          }}
        />
      </NoticeWrapper>
    </View>
  );
}
