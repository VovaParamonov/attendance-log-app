import {StyleSheet} from "react-native";

export default StyleSheet.create({
    phone_input_wrapper: {
        borderBottomColor: "#030706",
        borderBottomWidth: 1,
        position: "relative",
        paddingTop: 10,
        marginBottom: 15,
    },

    phone_input: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: "90%"
    },

    phone_title: {
        position: "absolute",
        left: 0,
        top: 0,
        fontSize: 10,
        opacity: .5
    },

    phone_call_btn: {
        position: "absolute",
        width: 20,
        height: 40,
        right: 10,
        bottom: "40%",
        zIndex: 10
    },

    phone_call_btn_img: {
        width: "100%",
        resizeMode: "contain"
    }
});