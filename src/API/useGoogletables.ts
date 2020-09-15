import {compute_alpha, google} from "googleapis";
import useStorage from "../hooks/useStorage";
import {credentialsType, tokenType} from "../models/googleAPIModels";

type returnType = {
    googleAuth: () => Promise<any>
}

const credentials: credentialsType = {
    installed: {
        client_id: process.env.client_id!,
        project_id: process.env.project_id!,
        auth_uri: process.env.auth_uri!,
        token_uri: process.env.token_uri!,
        auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url!,
        client_secret: process.env.client_secret!,
        redirect_uris: JSON.parse(process.env.redirect_uris!)
    }
}


const useGoogleTables = (): returnType => {
    const {
        getData,
        saveData
    } = useStorage();

    const googleAuth = async () => {
        const tokenJSON = await getData("token");
        const token = tokenJSON? JSON.parse(tokenJSON): null;
        const [oAuth2Client, checkTokenResult] = checkToken(credentials, token);
        if (!checkTokenResult) {
            const newTokenUrl = await getNewToken(oAuth2Client);

            return newTokenUrl;

            // await saveData("token", newToken);
            // oAuth2Client.setCredentials(JSON.parse(newToken));
        }
    }

    return {googleAuth};
}

export default useGoogleTables;

function checkToken(credentials: credentialsType, token?: string): [any, boolean] {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);

    if (!token) return [oAuth2Client, false];
    oAuth2Client.setCredentials(JSON.parse(token));
    return [oAuth2Client, true];
}

function getNewToken(oAuth2Client: any) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: JSON.parse(process.env.scopes!),
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    return authUrl;
    // rl.question('Enter the code from that page here: ', (code) => {
    //     rl.close();
    //     oAuth2Client.getToken(code, (err, token) => {
    //         if (err) return console.error('Error while trying to retrieve access token', err);
    //         oAuth2Client.setCredentials(token);
    //         // Store the token to disk for later program executions
    //         fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    //             if (err) return console.error(err);
    //             console.log('Token stored to', TOKEN_PATH);
    //         });
    //         callback(oAuth2Client);
    //     });
    // });
}
