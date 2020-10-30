import {StyleSheet} from "react-native";

export default StyleSheet.create({
    student_check_item: {
        padding: 13,
        shadowRadius: 10,
        shadowOffset: { width: 20, height: 5 },
        shadowColor: "#eaeaea",
        shadowOpacity: 0.1,
        elevation: 1,
        // background color must be set
        marginBottom: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },


    student_check_item_text: {
        color: "#606060"
    },

    student_check_item__check_box: {
        width: 15,
        height: 15,
        padding: 1,
        borderWidth: 1,
        borderColor: "#606060"
    },

    student_check_item__check_box_image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    }

});