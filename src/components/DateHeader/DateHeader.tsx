import React from "react";
import {StyleSheet, View, Text, ImageBackground} from "react-native";
import style from "./DateHeaderStyle";
import globalStyles from "../../../globalStyles";


type propsType = {

}

const DateHeader: (props: propsType) => JSX.Element = () => {
    return <ImageBackground source={require("../../../assets/imgs/back.png")} style={style.date_header} >
        <View style={StyleSheet.flatten([globalStyles.container, {height: "100%"}])}>
            <View style={style.header__inner}>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
            </View>
        </View>
    </ImageBackground>;
}

export default DateHeader;