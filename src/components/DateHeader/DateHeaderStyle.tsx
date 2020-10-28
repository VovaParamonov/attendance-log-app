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
    }
});