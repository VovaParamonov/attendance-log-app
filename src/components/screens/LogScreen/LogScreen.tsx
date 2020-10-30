import React, {useContext} from "react";
import {View, StyleSheet, Text} from "react-native";
import style from "./LogScreenStyle";
import DateHeader from "../../DateHeader/DateHeader";
import globalStyles from "../../../../globalStyles";
import LogList from "../../LogList/LogList";
import {Student} from "../../../models/global";
import globalDataContext from "../../../contexts/globalDataContext";

type typeProps = {}

const LogScreen: (props: typeProps) => JSX.Element = () => {
    const {groupList} = useContext(globalDataContext)!;


    return (<View style={StyleSheet.flatten([globalStyles.screen, style.log_screen])}>
        <DateHeader/>
        <LogList
            groups={groupList}
        />
    </View>);
}

export default LogScreen;