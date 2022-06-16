import { NoticeCardWrapper, NoticeCardWrapperContent } from "./noticeCard.style";
import { Image, Text, StyleSheet, View} from 'react-native';

export function NoticeCard({ image, title, descrition}) {
  return (
    <NoticeCardWrapper>
      <Image source={image} style={StyleSheet.create({ width: '100%'})} />
      <NoticeCardWrapperContent>
      <Text style={StyleSheet.create({fontWeight: 'bold', marginBottom: 10})}>{title}</Text>
      <Text>{descrition}</Text>
      <Text style={StyleSheet.create({ textAlign: 'right', marginTop: 10, color: '#0097F5', textDecorationLine: 'underline'})}>Ler Mais</Text>
      </NoticeCardWrapperContent>
    </NoticeCardWrapper>
  )
}
