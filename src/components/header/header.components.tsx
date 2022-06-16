import { View, Text, TouchableOpacity, Image } from "react-native";
import Logo from '../../assets/logo.png';
import { HeaderWrapper } from './header.style';
import Icon from 'react-native-vector-icons/Ionicons';

export function Header({ navigation }) {
  return (
    <HeaderWrapper>
      <Image source={Logo}/>
      <TouchableOpacity onPress={() => navigation.openDrawer()}><Icon name="menu" size={30} color="#3B3B3B" /></TouchableOpacity>
    </HeaderWrapper>
  );
}
