import React from "react";
import {View, Text, ScrollView} from "react-native";
import style from "./LogListStyle.ts";
import globalStyles from "../../../globalStyles";
import {groupType} from "../../models/global";
import StudentChecker from "./StudentChecker/StudentChecker";

type propsType = {
    groups: groupType[]
}

const LogList: (props: propsType) => JSX.Element = (props) => {
    const {groups} = props;

    const getGroupJSX = (group: groupType) => (
        <View key={group.groupId}>
            <View style={globalStyles.group_title}>
                <Text style={globalStyles.group_title_text}>{group.groupName}</Text>
            </View>
            <View style={{
                paddingTop: 25,
                overflow: "visible",
                paddingBottom: 200
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
        <View style={globalStyles.container}>
            {groups.map(getGroupJSX)}
        </View>
    </ScrollView>;
}

export default LogList;