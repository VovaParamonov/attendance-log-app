import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import './global';

import useRequest from "./src/hooks/useRequest";
import useStorage from "./src/hooks/useStorage";
import LaunchScreen from "./src/components/launchScreen";
import {screensVariants} from "./src/models/global";
import ListScreen from "./src/components/screens/ListScreen/ListScreen";
import LogScreen from "./src/components/screens/LogScreen/LogScreen";

export default function App() {
  const [test, setTest] = useState<string>("");
  const [selectedScreen, setSelectedScreen] = useState<screensVariants>("log");
  const [createRequest, loading] = useRequest();

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
        return <ListScreen />
      case "log":
        return <LogScreen />;
      default:
        return "Не выбран экран";
    }
  }

  return (
    <View style={styles.container}>
      {getCurrentScreen()}
      {/*<Text>Test: {test}</Text>*/}
      <LaunchScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
