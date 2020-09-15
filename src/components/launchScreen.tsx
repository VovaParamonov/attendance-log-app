// @ts-ignore
import GoogleSheet, { batchGet } from 'react-native-google-sheet';
import {StyleSheet, TouchableOpacity, View, Text} from "react-native";
import React from "react";

export default function LaunchScreen() {
    const clientId = "609588351065-ubu73dm52muij9dk14mgmvhng0c1g796.apps.googleusercontent.com";
    const GOOGLE_REDIRECT_URI = 'http://localhost';

    function _onPressButton() {
        const params = {
            ranges: 'A3:A8',
            // valueRenderOption: 'FORMATTED_VALUE',
            majorDimension: "COLUMNS",
            // dateTimeRenderOption:'SERIAL_NUMBER'
        };

        (async () => {
            const response = await batchGet(params);

            console.log(response);
        })();
    }

    return (
        <View>
            <GoogleSheet
                credentialsDetails={{
                    redirectUrl: GOOGLE_REDIRECT_URI,
                    clientId: clientId,
                }}
                spreadsheetId={"1fsRXsRjQW3cD_LbO-JJYqPBoFutJu9H4Q-ew7mLbq7k"}
            />
            <TouchableOpacity onPress={_onPressButton}>
                <Text>Get data</Text>
            </TouchableOpacity>
        </View>
    )
}