import React from "react";
import {View, Text, StyleSheet, StyleProp, TextStyle} from "react-native";
import {Picker} from '@react-native-picker/picker';
import style from "./SelectItemStyle"
import globalStyles from "../../../globalStyles";
import {type} from "os";

type propsType = {
    options: (string | {label: string, value: string})[]
    stateInterface: [string, React.Dispatch<string>],
    selectStyles?: StyleProp<TextStyle>
    title?: string
}

const SelectItem: (props: propsType) => JSX.Element = (props) => {
    const {
        options,
        stateInterface,
        selectStyles,
        title
    } = props;

    const [selectedValue, setSelectedValue] = stateInterface;

    return <View style={style.select_wrapper} >
        {title?<Text style={style.select_title} >{title}</Text>:null}
        <Picker
            selectedValue={selectedValue}
            onValueChange={itemValue => setSelectedValue(itemValue.toString())}
            style={StyleSheet.flatten([style.select, selectStyles || {}])}
            itemStyle={style.select_item}
        >
            {
                options.map(option => (
                    <Picker.Item
                        key={typeof option !== "string" ? option?.value :option}
                        value={typeof option !== "string" ? option?.value :option}
                        label={typeof option !== "string" ? option?.label :option}
                    />
                ))
            }
        </Picker>
    </View>;
}

export default SelectItem;