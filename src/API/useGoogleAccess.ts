import React, {useEffect, useState} from "react";
import useStorage from "../hooks/useStorage";

//@ts-ignore
import GoogleSheet, {batchGet} from 'react-native-google-sheet';

export type returnType = {
    accessToken: string | null;
    requestLoading: boolean;
    saveLoading: boolean;
    requestData: () => void;
    saveData: () => void;
}

export default function useGoogleAccess(): returnType  {
    const {getData} = useStorage();
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [requestLoading, setRequestLoading] = useState<boolean>(true);
    const [saveLoading, setSaveLoading] = useState<boolean>(false);

    function requestData() {
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

    const saveData = () => {

    }


    useEffect(() => {
        (async () => {
            const initToken = await getData("AccessToken");

            console.log("test tokenL", initToken);

            setAccessToken(initToken);
            setRequestLoading(false);
        })();
    }, []);

    return {
        accessToken,
        requestLoading,
        saveLoading,
        requestData,
        saveData
    }
}