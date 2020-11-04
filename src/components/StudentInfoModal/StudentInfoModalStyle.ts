import {StyleSheet} from "react-native";

export default StyleSheet.create({
    student_modal__header: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#606060",
        paddingVertical: 20,
        width: '100%',
        textAlign: "center"
    },

    student_modal__form: {
        paddingTop: 20,
        marginBottom: 20
    },

    student_modal__interface: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",

    },

    student_modal__btn: {
        backgroundColor: "red",
        padding: 20,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        flexBasis: 125,
        flexGrow: 0,
        borderRadius: 7,
    },

    student_modal__save_btn: {
        backgroundColor: "#88d888"
    },

    student_modal__delete_btn: {
        backgroundColor: "#d27676"
    }
});