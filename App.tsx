import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import useRequest from "./src/hooks/useRequest";
import useStorage from "./src/hooks/useStorage";
import LaunchScreen from "./src/components/launchScreen";

export default function App() {
  const [test, setTest] = useState<string>("");
  const [createRequest, loading] = useRequest();

  const {saveData, getData, clearStorage} = useStorage();

  useEffect(() => {

    (async () => {
      const result = await createRequest("https://my-json-server.typicode.com/typicode/demo/posts");

      setTest(result[0].title);


    })();
  }, []);


  return (
    <View style={styles.container}>
      <Text>Hello, my World!</Text>
      <Text>Test: {test}</Text>
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
