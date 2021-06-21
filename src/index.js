import ObjectClass from "./Object";

const obj = {
    key1: {
        a: "",
        b: ["", "", ""],
        c: {
            d: {
                e: ""
            }
        }
    },
    key2: [""]
};

ObjectClass.checkObject(obj)

