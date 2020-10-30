export type screensVariants = "log" | "list";

export class Student {
    constructor(initData: {
        id: string;
        group?: string;
        full_name?: string;
        parent_full_name?: string;
        phone?: string;
        parent_phone?: string
    }) {
        this.id = initData.id;
        this.full_name = initData.full_name || "";
        this.parent_full_name = initData.parent_full_name || "";
        this.group = initData.group || "Старшая";
        this.phone = initData.phone || "";
        this.parent_phone = initData.phone || "";
    }

    readonly id: string;
    readonly full_name: string;
    readonly parent_full_name: string;
    readonly group: string;
    readonly phone: string;
    readonly parent_phone: string;

    update(data: {
        [K in keyof Student]: Student[K]
    }) {
        return {...this, data};
    }
}

export type groupType = {
    groupId: string,
    groupName: string,
    list: Student[]
}