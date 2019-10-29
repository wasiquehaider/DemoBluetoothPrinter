import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";

import { Router, Scene, Stack } from "react-native-router-flux";
import Home from "./Home";
import PrintScreen from "./PrintScreen";

const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" component={Home} title="Home" hideNavBar initial />
      <Scene
        key="printScreen"
        component={PrintScreen}
        title="Print"
        hideNavBar
      />
    </Stack>
  </Router>
);

export default App;
