import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import './global';
import globalStyles from "./globalStyles";
import style from "./AppStyle";

import LaunchScreen from "./src/components/launchScreen";
import {screensVariants, Student} from "./src/models/global";
import ListScreen from "./src/components/screens/ListScreen/ListScreen";
import LogScreen from "./src/components/screens/LogScreen/LogScreen";
import NavBar from "./src/components/NavBar/NavBar";

import globalDataContext from "./src/contexts/globalDataContext";
import useDataModule from "./src/hooks/useDataModule";

export default function App() {
    const [selectedScreen, setSelectedScreen] = useState<screensVariants>("log");

    const globalDataModule = useDataModule();

    useEffect(() => {

        (async () => {

        })();
    }, []);

    const getCurrentScreen = () => {
        switch (selectedScreen) {
            case "list":
                return <ListScreen/>
            case "log":
                return <LogScreen/>;
            default:
                return "Не выбран экран";
        }
    }

    return (
        <View style={style.app}>
            <globalDataContext.Provider value={globalDataModule}>
                {getCurrentScreen()}
                <LaunchScreen />
                <NavBar/>
            </globalDataContext.Provider>
        </View>
    );
}
