import {StyleSheet} from "react-native";

export default StyleSheet.create({
    date_header: {
        // width: "100%",
        flex: 1,
        flexGrow: 1,
        resizeMode: "cover",
        justifyContent: "center",
        borderRadius: 20,
        overflow: "hidden"
    },
    header__inner: {
        paddingTop: "10%",
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    date_header__btn: {
        width: 35,
        // height: 50,
        resizeMode: "contain",
    },

    date_header__date: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },

    date_header__date_number: {
        fontWeight: "bold",
        fontSize: 40,
        color: "white"
    },

    date_header__date_day: {
        fontSize: 20,
        color: "white"
    }
});