import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Home from './screen/home';
import Main from './screen/main';
const RouterDemo = () => (
    <Router>
        <Stack headerLayoutPreset="center" key='root'>
        <Scene key="main" hideNavBar component={Main} />
        <Scene key='home' hideNavBar component={Home} />
        </Stack>
    </Router>
);
export default RouterDemo;
