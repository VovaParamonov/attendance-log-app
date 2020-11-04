import {useEffect, useState} from "react";
import {Student, StudentsGroup} from "../models/global";
import {Group} from "react-native";

type propsType = {}

type returnType = {
    studentNameStateInterface: [string, React.Dispatch<string>]
    parentNameStateInterface: [string, React.Dispatch<string>]
    groupStateInterface: [string, React.Dispatch<string>]
    studentPhoneStateInterface: [string, React.Dispatch<string>]
    parentPhoneStateInterface: [string, React.Dispatch<string>],
    changed: boolean,
    saveData: () => Promise<boolean>,
    deleteStudent: () => Promise<boolean>
}

const useStudentInfoEditor = (student: Student): returnType => {
    const studentNameStateInterface = useState<string>(student.full_name || "");
    const parentNameStateInterface = useState<string>(student.parent_full_name || "");
    const groupStateInterface = useState<string>(student.group);
    const studentPhoneStateInterface = useState<string>(clearPhone(student.phone) || "");
    const parentPhoneStateInterface = useState<string>(clearPhone(student.parent_phone) || "");
    const [changed, setChanged] = useState(false);

    const saveData = async () => {
        return true;
    }

    const deleteStudent = async () => {
        return true
    }

    useEffect(() => {
        setChanged(
            clearPhone(student.phone) !== studentPhoneStateInterface[0] ||
            clearPhone(student.parent_phone) !== parentPhoneStateInterface[0] ||
            student.group !== groupStateInterface[0] ||
            student.full_name !== studentNameStateInterface[0] ||
            student.parent_full_name !== parentNameStateInterface[0]
        );
        },
        [
            studentNameStateInterface[0],
            parentNameStateInterface[0],
            groupStateInterface[0],
            studentPhoneStateInterface[0],
            parentPhoneStateInterface[0]
        ]
    );

    return {
        studentNameStateInterface,
        parentNameStateInterface,
        groupStateInterface,
        studentPhoneStateInterface,
        parentPhoneStateInterface,
        changed,
        saveData,
        deleteStudent
    };
}

const clearPhone = (phone: string) => {
    if (phone.startsWith("8")) return phone.slice(1);
    if (phone.startsWith("+7")) return phone.slice(2);
}

export default useStudentInfoEditor;