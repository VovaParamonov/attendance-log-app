import React from "react";
import {View, StyleSheet, Text} from "react-native";
import style from "./LogScreenStyle";
import DateHeader from "../../DateHeader/DateHeader";
import globalStyles from "../../../../globalStyles";

type typeProps = {

}

const LogScreen: (props:typeProps) => JSX.Element = () => {

    return (<View style={StyleSheet.flatten([globalStyles.screen, style.log_screen])} >
        <DateHeader />
        <View style={{
            flex: 1,
            flexGrow: 3.5,
        }}>

        </View>
    </View>);
}

export default LogScreen;