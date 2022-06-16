import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
import { Home } from "../../screens/home";
import { Report } from "../../screens/report/report";
import { Header } from "../header/header.components";

export default (props) => (
  <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false}}>
    <Drawer.Screen name="Inicio" component={Home} />
    <Drawer.Screen name="Reportar Vazamento" component={Report} />
    <Drawer.Screen name="Alerta de inundação" component={Home} />
    <Drawer.Screen name="Nivel dos reservatórios" component={Home} />
  </Drawer.Navigator>
);
