import React, {useState} from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    StyleProp,
    TextInputChangeEventData,
    NativeSyntheticEvent
} from "react-native";
import style from "./InputItemStyle"
import globalStyles from "../../../globalStyles";

type propsType = {
    stateInterface: [string, React.Dispatch<string>]
    placeholder?: string,
    inputStyles?: StyleProp<TextInput>,
    title?: string
}

const InputItem: (props: propsType) => JSX.Element = (props) => {
    const {
        placeholder,
        inputStyles,
        stateInterface,
        title
    } = props;

    const [value, changeHandler] = stateInterface;

    return <View style={style.input_wrapper} >
        {title? <Text style={style.input_title} >{title}</Text>: null}
        <TextInput
            style={StyleSheet.flatten([style.input, inputStyles || {}])}
            placeholder={placeholder || ""}
            value={value}
            onChangeText={changeHandler}
        />
    </View>;
}

export default InputItem;