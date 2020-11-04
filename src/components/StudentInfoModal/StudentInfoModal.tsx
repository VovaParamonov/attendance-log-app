import React, {useRef, useState} from "react";
import {
    View,
    Text,
    Modal,
    TouchableWithoutFeedback, GestureResponderEvent, TouchableOpacity,
    StyleSheet
} from "react-native";
import style from "./StudentInfoModalStyle"
import globalStyles from "../../../globalStyles";
import InputItem from "../InputItem/InputItem";
import SelectItem from "../SelectItem/SelectItem";
import PhoneInput from "../PhoneInput/PhoneInput";
import useStudentInfoEditor from "../../hooks/useStudentInfoEditor";
import {Student} from "../../models/global";

type propsType = {
    student: Student,
    closeModal: () => void
}

const StudentInfoModal: (props: propsType) => JSX.Element = (props) => {
    const {
        student,
        closeModal
    } = props;

    const {
        studentNameStateInterface,
        parentNameStateInterface,
        groupStateInterface,
        studentPhoneStateInterface,
        parentPhoneStateInterface,
        changed,
        saveData,
        deleteStudent
    } = useStudentInfoEditor(student);

    const modalRef = useRef<Modal>(null);

    const outPressHandler = (e: GestureResponderEvent) => {
        closeModal()
    }


    return <Modal
        nativeID={"123"}
        transparent={true}
        ref={modalRef}
    >
        <TouchableWithoutFeedback
            onPress={outPressHandler}
        >
            <View style={globalStyles.modal_wrapper}>
                <TouchableWithoutFeedback
                    onPress={() => {}}
                >
                    <View style={globalStyles.modal}>
                        <View style={globalStyles.container}>
                            <View>
                                <Text style={style.student_modal__header}>Редактирование данных</Text>
                            </View>
                            <View style={style.student_modal__form}>
                                <InputItem
                                    stateInterface={studentNameStateInterface}
                                    placeholder={"ФИО ребенка"}
                                    title={"Ребенок"}
                                />
                                <InputItem
                                    stateInterface={parentNameStateInterface}
                                    placeholder={"ФИО родителя"}
                                    title={"Родитель"}
                                />
                                <SelectItem
                                    title="Группа"
                                    options={["Старшая", "Средняя"]}
                                    stateInterface={groupStateInterface}
                                />
                                <PhoneInput
                                    stateInterface={parentPhoneStateInterface}
                                    title={"Телефон родителя"}
                                />
                                <PhoneInput
                                    stateInterface={studentPhoneStateInterface}
                                    title={"Телефон ребенка"}
                                />
                            </View>
                            <View style={style.student_modal__interface} >
                                <TouchableOpacity style={StyleSheet.flatten([style.student_modal__btn, style.student_modal__save_btn])} >
                                    <Text style={{color: "white"}} >Сохранить</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={StyleSheet.flatten([style.student_modal__btn, style.student_modal__delete_btn])} >
                                    <Text style={{color: "white"}} >Удалить</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    </Modal>;
}

export default StudentInfoModal;