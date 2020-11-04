import React, {useState} from "react";
import {View, Text, Modal, NativeSyntheticEvent, TextInputChangeEventData} from "react-native";
import style from "./StudentInfoModalStyle"
import globalStyles from "../../../globalStyles";
import InputItem from "../InputItem/InputItem";

type propsType = {}

const StudentInfoModal: (props: propsType) => JSX.Element = () => {
    const stateInterface = useState<string>("");

    return <Modal
        transparent={true}
    >
        <View style={globalStyles.modal_wrapper}>
            <View style={globalStyles.modal} >
                <View style={globalStyles.container} >
                    <View  >
                        <Text style={style.student_modal__header} >Редактирование данных</Text>
                    </View>
                    <View style={style.student_modal__form}  >
                        <InputItem
                            stateInterface={stateInterface}
                            placeholder={"ФИО ребенка"}
                            title={"Ребенок"}
                        />
                        <InputItem
                            stateInterface={stateInterface}
                            placeholder={"ФИО родителя"}
                            title={"Родитель"}
                        />
                    </View>
                </View>

            </View>
        </View>
    </Modal>;
}

export default StudentInfoModal;