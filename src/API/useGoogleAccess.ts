import React, {useEffect, useState} from "react";
import useStorage from "../hooks/useStorage";

//@ts-ignore
import GoogleSheet, {batchGet} from 'react-native-google-sheet';

export type returnType = {
    accessToken: string | null;
    requestLoading: boolean;
    requestData: () => Promise<string[][] | boolean>;
}

export default function useGoogleAccess(): returnType {
    const {getData} = useStorage();
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [requestLoading, setRequestLoading] = useState<boolean>(true);

    function requestData() {
        const params = {
            ranges: 'A2:F200',
            // valueRenderOption: 'FORMATTED_VALUE',
            majorDimension: "ROWS",
            // dateTimeRenderOption:'SERIAL_NUMBER'
        };

        return (async () => {
            try {
                const response = await batchGet(params);
                console.log(response);
                return response.data.valueRanges[0].values;
            } catch (e) {
                console.log("Ошибка запроса к таблицам:", e);
                if (e.toString() === "Error: Request failed with status code 401") {
                    console.log("Проблема с авторизацией, запрос на обновление токена");
                    setAccessToken(null);
                }
                return false;
            }
        })();
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
        requestData
    }
}