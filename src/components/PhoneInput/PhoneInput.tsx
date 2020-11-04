import React, {useEffect, useState} from "react";
import {View, Text, TouchableOpacity, StyleProp, StyleSheet, Image} from "react-native";
import style from "./PhoneInputStyle"
import globalStyles from "../../../globalStyles";
import {Linking} from 'react-native'


import { TextInputMask } from 'react-native-masked-text';

type propsType = {
    stateInterface: [string, React.Dispatch<string>],
    title?: string,
    phoneStyles?: StyleProp<any>
}

const PhoneInput: (props: propsType) => JSX.Element = (props) => {
    const {
        phoneStyles,
        stateInterface,
        title
    } = props;

    const [value, setValue] = stateInterface;

    const [extractedPhone, setExtractedPhone] = useState<string | undefined>("");

    const call = () => {
        Linking.openURL(`tel:${value}`)
    }

    return <View style={style.phone_input_wrapper} >
        {title? <Text style={style.phone_title} >{title}</Text>: null}
        <TextInputMask
            placeholder={"+7 (***) ..."}
            type={'cel-phone'}
            style={StyleSheet.flatten([style.phone_input, phoneStyles || {}])}
            options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '+7 (999) 999-99-99'
            }}
            value={value}
            includeRawValueInChangeText={true}
            onChangeText={((text, rawText) => {
                setValue(text);
                setExtractedPhone(rawText);
            })}
        />
        <TouchableOpacity onPress={call} style={style.phone_call_btn} >
            <Image source={require("../../../assets/imgs/call.png")} style={style.phone_call_btn_img} />
        </TouchableOpacity>
    </View>;
}

export default PhoneInput;