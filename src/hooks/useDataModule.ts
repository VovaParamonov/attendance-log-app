import useGoogleAccess from "../API/useGoogleAccess";
import {useEffect, useState} from "react";
import {Group} from "react-native";
import useStorage from "./useStorage";
import {Student, StudentsGroup} from "../models/global";

export type returnType = {
    groupList: StudentsGroup[],
    saveGlobalData: () => Promise<boolean>;
    pullData: () => Promise<boolean>;
    googleAccessController: {accessToken: string | null, requestLoading: boolean};
}

const useDataModule = (): returnType => {
    const [groupList, setGroupList] = useState<StudentsGroup[]>([]);

    const {
        accessToken,
        requestLoading,
        requestData
    } = useGoogleAccess();

    const {saveData, getData} = useStorage();

    useEffect(() => {
        (async () => {
            const studentListFromStorage = await getData("groupList");
            if (studentListFromStorage) {
                setGroupList(JSON.parse(studentListFromStorage))
            }

            await pullData();
        })();
    }, []);

    const saveGlobalData = async () => {
        try {
            await saveData("groupList", JSON.stringify(groupList));
            return true;
        } catch (ex) {
            return false;
        }
    }

    const pullData = async () => {
        const studentListFromGoogle = await requestData() as string[][];

        if (!studentListFromGoogle) {
            alert("Во время загрузки данных с таблиц, произошла ошибка :(");
            return false;
        }

        const groupListFromGoogle: StudentsGroup[] = [];

        studentListFromGoogle.forEach((studentData, index) => {
            const studentGroupName = studentData[5];

            if (studentData.length === 0 || studentData[0] === "") return;

            let groupOfCurrentStudent = groupListFromGoogle.find(group => group.groupName === studentGroupName);

            if (!groupOfCurrentStudent) {
                groupOfCurrentStudent = new StudentsGroup({
                    groupId: groupListFromGoogle.length.toString(),
                    groupName: studentGroupName,
                    list: []
                })

                groupListFromGoogle.push(groupOfCurrentStudent);
            }

            groupOfCurrentStudent.list.push(new Student({
                id: `${index} ${studentData[0]}`,
                row_in_table: index + 2,
                group: studentGroupName,
                full_name: studentData[1],
                parent_full_name: studentData[2],
                parent_phone: studentData[3],
                phone: studentData[4]
            }));
        });

        console.log("new grops list from google:", groupListFromGoogle);

        setGroupList(groupListFromGoogle);

        try {
            await saveData("groupList", JSON.stringify(groupListFromGoogle));
        } catch (ex) {
            alert("Данные загружены с сервера, но во время их сохранения произошла ошибка, свяжитесь с разработчиком приложения!");
        }

        return true;
    }


    return {
        groupList,
        saveGlobalData,
        pullData,
        googleAccessController: {
            accessToken,
            requestLoading
        }
    };
}

export default useDataModule;