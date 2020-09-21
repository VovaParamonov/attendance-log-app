import React from "react";
import "./addStudentModal.css";
import {WebView} from "react-native-webview";
import {Modal} from "react-native";

type typeProps = {

}

const AddStudentModal: (props: typeProps) => JSX.Element = () => {
    return (
        <Modal>
            <WebView
                sharedCookiesEnabled
                source={{ uri: global.googleFormUrl }}
                mixedContentMode="compatibility"
                javaScriptEnabled
                bounces
                userAgent = "Mozilla/5.0 (Linux; Android 4.1.1; Galaxy Nexus Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
                domStorageEnabled
                thirdPartyCookiesEnabled
                originWhitelist={['*']}
                onNavigationStateChange={(url) => console.log("url:", url)}
            />
        </Modal>
    )
}

export default AddStudentModal;