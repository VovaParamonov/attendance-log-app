import {StyleSheet} from "react-native";

export default StyleSheet.create({
    nav_bar: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        paddingBottom: "10%",
        position: "absolute",
        bottom: 0,
        height: 100,
    },

    nav_bar__btn_image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },

    nav_bar__btn: {
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: "#4545ff",
        color: "white",
        padding: 15
    },

    nav_bar__btn_save: {
        height: 60,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        flexGrow: 0.5,
        alignItems: "center",
        position: 'relative'
    },

    nav_bar__btn_save_image_wrapper: {
        width: 60,
        height: 60,
        backgroundColor: "#4567ff",
        position: "absolute",
        right: 0,
        borderRadius: 60,
        padding: 20
    }
});