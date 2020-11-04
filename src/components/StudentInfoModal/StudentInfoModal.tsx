import React, {useState} from "react";
import {View, Text, Modal, NativeSyntheticEvent, TextInputChangeEventData} from "react-native";
import style from "./StudentInfoModalStyle"
import globalStyles from "../../../globalStyles";
import InputItem from "../InputItem/InputItem";
import SelectItem from "../SelectItem/SelectItem";

type propsType = {}

const StudentInfoModal: (props: propsType) => JSX.Element = () => {
    const stateInterface = useState<string>("");
    const selectStateInterface = useState<string>("option1");

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
                        <SelectItem
                            title="Группа"
                            options={["Старшая", "Средняя"]}
                            stateInterface={selectStateInterface}
                        />
                    </View>
                </View>

            </View>
        </View>
    </Modal>;
}

export default StudentInfoModal;