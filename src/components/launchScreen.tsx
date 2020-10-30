// @ts-ignore
import GoogleSheet, {batchGet} from 'react-native-google-sheet';
import {StyleSheet, TouchableOpacity, View, Text} from "react-native";
import React, {useContext, useEffect, useState} from "react";
import useStorage from "../hooks/useStorage";
import globalDataContext from "../contexts/globalDataContext";


export default function LaunchScreen() {
    const GOOGLE_REDIRECT_URI = 'http://localhost';

    const {googleAccessController} = useContext(globalDataContext)!;

    const {requestLoading, accessToken} = googleAccessController;

    const {saveData} = useStorage();

    return (
        <View>
            {
                !requestLoading ?
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
                    </> : null
            }
        </View>
    )
}