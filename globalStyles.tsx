import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        width: "100%",
        paddingLeft: 25,
        paddingRight: 25,
    },
    screen: {
        height: "100%"
    },

    //GROUP
    group_title: {
        // backgroundColor: "red",
        width: "120%",
        borderBottomWidth: 1,
        borderBottomColor: "#b9b9b9"
    },

    group_title_text: {
        fontWeight: "100",
        color: "#b9b9b9",
    },

    //MODAL

    modal_wrapper: {
        backgroundColor: "rgba(192,219,234,0.5)",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    modal: {
        backgroundColor: "#fff",
        borderRadius: 20,
        // flex: 1,
        width: "85%",
        minHeight: 500,
        height: "50%",

        shadowRadius: 10,
        shadowOffset: { width: 20, height: 5 },
        shadowColor: "#eaeaea",
        shadowOpacity: 0.1,
        elevation: 1,
    }
});