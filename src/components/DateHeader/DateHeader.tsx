import React from "react";
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    TouchableNativeFeedback,
    TouchableHighlight, TouchableOpacityComponent
} from "react-native";
import style from "./DateHeaderStyle";
import globalStyles from "../../../globalStyles";
import {Font} from "expo/build/removed.web";


type propsType = {

}

const DateHeader: (props: propsType) => JSX.Element = () => {
    return <ImageBackground source={require("../../../assets/imgs/back.png")} style={style.date_header} >
        <View style={StyleSheet.flatten([globalStyles.container, {height: "100%"}])}>
            <View style={style.header__inner}>
                <TouchableOpacity>
                    <Image
                        style={ StyleSheet.flatten([style.date_header__btn,{
                            transform: [{scaleX: -1}]
                        }])}
                        source={require("../../../assets/imgs/next.png")}
                    />
                </TouchableOpacity>
                <View style={style.date_header__date} >
                    <Text style={style.date_header__date_number} >06.09</Text>
                    <Text style={style.date_header__date_day} >Вторник</Text>
                </View>
                <TouchableOpacity>
                    <Image
                        style={ StyleSheet.flatten([style.date_header__btn])}
                        source={require("../../../assets/imgs/next.png")}

                    />
                </TouchableOpacity>
            </View>
        </View>
    </ImageBackground>;
}

export default DateHeader;