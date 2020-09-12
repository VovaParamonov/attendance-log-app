import AsyncStorage from '@react-native-community/async-storage';

type returnType = {
    saveData:  (name: string, value: string) => Promise<boolean>
    getData: (name: string) => Promise<string | null>
    clearStorage: () => Promise<boolean>
}

const useStorage = (): returnType => {
    const saveData: returnType["saveData"] = async (name: string, value: string) => {
        try {
            await AsyncStorage.setItem(`@${name}`, value);
            return true;
        } catch (e) {
            alert(JSON.stringify(e));
            return false;
        }
    }

    const getData: returnType["getData"] = async (name: string) => {
        try {
            return await AsyncStorage.getItem(`@${name}`);
        } catch (e) {
            alert(JSON.stringify(e));
            return null;
        }
    }

    const clearStorage: returnType["clearStorage"] = async () => {
        try {
            await AsyncStorage.clear();
            return true;
        } catch (e) {
            return false;
        }
    }

    return {
        saveData,
        getData,
        clearStorage
    };
}

export default useStorage;