import React, {useContext} from "react";
import {View, Text, TouchableOpacity, Image, StyleSheet} from "react-native";
import style from "./NavBarStyle";
import globalStyles from "../../../globalStyles";
import googleAccessContext from "../../contexts/googleAccessContext";

type propsType = {}

const NavBar: (props: propsType) => JSX.Element = () => {
    const {requestData} = useContext(googleAccessContext)!;


    return <View style={style.nav_bar}>
        <TouchableOpacity style={style.nav_bar__btn}>
            <Image
                source={require("../../../assets/imgs/list.png")}
                style={style.nav_bar__btn_image}
            />
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheet.flatten([style.nav_bar__btn, style.nav_bar__btn_save])}>
            <Text style={{color: "white", fontSize: 13}}>Сохранить</Text>
            <View style={style.nav_bar__btn_save_image_wrapper}>
                <Image
                    source={require("../../../assets/imgs/arrow.png")}
                    style={StyleSheet.flatten([
                        style.nav_bar__btn_image,
                        {
                            transform: [{
                                rotateZ: "90deg"
                            }],
                        }
                    ])}
                />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={requestData} style={style.nav_bar__btn}>
            <Image
                source={require("../../../assets/imgs/reload.png")}
                style={style.nav_bar__btn_image}
            />
        </TouchableOpacity>
    </View>;
}

export default NavBar;