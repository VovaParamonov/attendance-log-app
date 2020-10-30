import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import style from "./StudentCheckerStyle.ts"
import globalStyles from "../../../../globalStyles";
import {Student} from "../../../models/global";

type propsType = {
    student: Student
}

const StudentChecker: (props: propsType) => JSX.Element = (props) => {
    const {student} = props;

    const [selected, setSelected] = useState(false);

    const selectToggle = () => {
        setSelected(selected => !selected);
    }

    return <TouchableOpacity
        style={StyleSheet.flatten([
            style.student_check_item,
            {backgroundColor: selected? "#e1fff3": "#fff"}
            ])}
        onPress={selectToggle}
    >
        <Text style={style.student_check_item_text} >{student.full_name}</Text>
        <View style={style.student_check_item__check_box} >
            <Image
                source={require("../../../../assets/imgs/check.png")}
                style={StyleSheet.compose(
                    style.student_check_item__check_box_image,
                    {
                        display: selected? "flex" : "none"
                    }
                    )
                }
            />
        </View>
    </TouchableOpacity>;
}

export default StudentChecker;