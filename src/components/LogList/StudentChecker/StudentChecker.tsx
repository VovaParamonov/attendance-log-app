import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import style from "./StudentCheckerStyle"
import globalStyles from "../../../../globalStyles";
import {Student} from "../../../models/global";
import StudentInfoModal from "../../StudentInfoModal/StudentInfoModal";

type propsType = {
    student: Student
}

const StudentChecker: (props: propsType) => JSX.Element = (props) => {
    const {student} = props;

    const [modalOpened, setModalOpened] = useState<boolean>(false);

    const [selected, setSelected] = useState(false);

    const selectToggle = () => {
        setSelected(selected => !selected);
    }

    return modalOpened? <StudentInfoModal /> : <TouchableOpacity
        style={StyleSheet.flatten([
            style.student_check_item,
            {backgroundColor: selected? "#e1fff3": "#fff"}
            ])}
        onPress={selectToggle}
        delayLongPress={500}
        onLongPress={() => setModalOpened(p => !p)}
    >
        <Text style={style.student_check_item_text} >{student.full_name}</Text>
        <View style={style.student_check_item__check_box} >
            <Image
                source={require("../../../../assets/imgs/check.png")}
                style={StyleSheet.flatten([
                    style.student_check_item__check_box_image,
                    {
                        display: selected? "flex" : "none"
                    }
                    ])
                }
            />
        </View>
    </TouchableOpacity>;
}

export default StudentChecker;