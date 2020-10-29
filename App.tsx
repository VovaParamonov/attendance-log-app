import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import './global';
import globalStyles from "./globalStyles";
import style from "./AppStyle";

import useRequest from "./src/hooks/useRequest";
import useStorage from "./src/hooks/useStorage";
import LaunchScreen from "./src/components/launchScreen";
import {screensVariants} from "./src/models/global";
import ListScreen from "./src/components/screens/ListScreen/ListScreen";
import LogScreen from "./src/components/screens/LogScreen/LogScreen";
import NavBar from "./src/components/NavBar/NavBar";

import googleAccessContext from "./src/contexts/googleAccessContext";
import useGoogleAccess from "./src/API/useGoogleAccess";

export default function App() {
    const [test, setTest] = useState<string>("");
    const [selectedScreen, setSelectedScreen] = useState<screensVariants>("log");
    const [createRequest, loading] = useRequest();

    const googleAccessModule = useGoogleAccess();

    const {saveData, getData, clearStorage} = useStorage();

    useEffect(() => {

        (async () => {
            const result = await getData("title");

            setTest(result!);
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
            <googleAccessContext.Provider value={googleAccessModule}>
                {getCurrentScreen()}
                {/*<Text>Test: {test}</Text>*/}
                <LaunchScreen />
                <NavBar/>
            </googleAccessContext.Provider>
        </View>
    );
}
