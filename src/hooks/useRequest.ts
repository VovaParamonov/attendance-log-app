import {useState} from 'react';
import axios, {AxiosResponse} from 'axios';

type returnType = [
    createRequestFunctionType,
    boolean, boolean
];

type createRequestParamsType = {
    url: string,
    params?: any,
    method?: "GET" | "POST"
}

type createRequestFunctionType = (
    url: string,
    params?: any,
    method?: "GET" | "POST"
) => Promise<AxiosResponse["data"]>;

const useRequest = (): returnType => {
    const [loading, setLoading] = useState<boolean>(false);
    const [requestEnded, setRequestEnded] = useState<boolean>(false);

    const createRequest: createRequestFunctionType = (
        url: createRequestParamsType['url'],
        params: createRequestParamsType['params'],
        method: createRequestParamsType['method']
    ) => {

        const requestSettings = {
            method: method || "GET",
            params: params
        }

        setLoading(true);

        return axios(url, requestSettings)
            .then(response => {
                const {data} = response;
                return data;
            }).catch(err => {

                if (err.response) {
                    console.log("error in response from server handled. err.response:", err.response);
                    return err.response;
                } else if (err.request) {
                    console.log("error in response from server handled. err.request:", err.response);
                    return err.request;
                } else {
                    console.error("error in response from server handled JSON of err: ", err.toJSON());
                    return err;
                }
            }).finally(() => {
                setLoading(false);
                setRequestEnded(true);
            });
    }

    return [createRequest, loading, requestEnded];
}

export default useRequest;