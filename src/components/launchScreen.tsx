// @ts-ignore
import GoogleSheet, {batchGet} from 'react-native-google-sheet';
import {StyleSheet, TouchableOpacity, View, Text} from "react-native";
import React, {useEffect, useState} from "react";
import useStorage from "../hooks/useStorage";

export default function LaunchScreen() {
    const GOOGLE_REDIRECT_URI = 'http://localhost';

    const {saveData, getData} = useStorage();
    const [accessToken, setAccessToken] = useState<string | null>();
    const [loading, setLoading] = useState<boolean>(true);

    function _onPressButton() {
        const params = {
            ranges: 'A3:A8',
            // valueRenderOption: 'FORMATTED_VALUE',
            majorDimension: "COLUMNS",
            // dateTimeRenderOption:'SERIAL_NUMBER'
        };

        (async () => {
            try {
                const response = await batchGet(params);
                console.log(response);
            } catch (e) {
                console.log("Ошибка запроса к таблицам:", e);
                if (e.toString() === "Error: Request failed with status code 401") {
                    console.log("Проблема с авторизацией, запрос на обновление токена");
                    setAccessToken(null);
                }
            }
        })();
    }

    useEffect(() => {
        (async () => {
            const initToken = await getData("AccessToken");

            console.log("test tokenL", initToken);

            setAccessToken(initToken);
            setLoading(false);
        })();
    }, []);

    return (
        <View>
            {
                !loading ?
                    <>
                        <GoogleSheet
                            credentialsDetails={{
                                redirectUrl: GOOGLE_REDIRECT_URI,
                                //@ts-ignore
                                clientId: global.clientId,
                            }}
                            getAccessToken={(token: string) => {
                                console.log("new Token:", token);
                                saveData("AccessToken", token)
                            }}
                            //@ts-ignore
                            spreadsheetId={global.spreadsheetId}
                            initToken={accessToken}
                        />

                        <TouchableOpacity onPress={_onPressButton}>
                            <Text>Обновить данные</Text>
                        </TouchableOpacity>
                    </> : null
            }
        </View>
    )
}