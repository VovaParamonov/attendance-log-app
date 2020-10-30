import React from "react";
import {View, StyleSheet, Text} from "react-native";
import style from "./LogScreenStyle";
import DateHeader from "../../DateHeader/DateHeader";
import globalStyles from "../../../../globalStyles";
import LogList from "../../LogList/LogList";
import {Student} from "../../../models/global";

type typeProps = {}

const LogScreen: (props: typeProps) => JSX.Element = () => {

    return (<View style={StyleSheet.flatten([globalStyles.screen, style.log_screen])}>
        <DateHeader/>
        <LogList
            groups={[
                {
                    groupId: "1",
                    groupName: "Старшая",
                    list: [
                        new Student({
                            id: "1",
                            group: "Старшая",
                            full_name: "Парамонов Владимир",
                        }),
                        new Student({
                            id: "2",
                            group: "Старшая",
                            full_name: "Павлов Павел",
                        }),
                        new Student({
                            id: "3",
                            group: "Старшая",
                            full_name: "Бугаев Андрей",
                        }),
                        new Student({
                            id: "4",
                            group: "Старшая",
                            full_name: "Михаил Александров",
                        })
                    ]
                },
            ]}
        />
    </View>);
}

export default LogScreen;