import React from "react";
import {View, Text, ScrollView, StyleSheet} from "react-native";
import style from "./LogListStyle";
import globalStyles from "../../../globalStyles";
import {StudentsGroup} from "../../models/global";
import StudentChecker from "./StudentChecker/StudentChecker";

type propsType = {
    groups: StudentsGroup[]
}

const LogList: (props: propsType) => JSX.Element = (props) => {
    const {groups} = props;

    const getGroupJSX = (group: StudentsGroup) => (
        <View key={group.groupId} style={style.group_container} >
            <View style={globalStyles.group_title}>
                <Text style={globalStyles.group_title_text}>{group.groupName}</Text>
            </View>
            <View style={{
                paddingTop: 25,
                overflow: "visible"
            }}
            >
                {
                    group.list.map(student => (
                        <StudentChecker key={student.id} student={student}/>
                    ))
                }
            </View>
        </View>
    );

    return <ScrollView style={style.log_list}>
        <View style={StyleSheet.flatten([globalStyles.container, {paddingBottom: 200}])}>
            {groups.map(getGroupJSX)}
        </View>
    </ScrollView>;
}

export default LogList;