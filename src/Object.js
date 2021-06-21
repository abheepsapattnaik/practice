import StringClass from "./String";

export default class ObjectClass {

    static checkObject(Obj) {
        Object.values(Obj).forEach(each => {
            if (typeof each === "object") {
                this.checkObject(each);
            }
            else if(typeof  each === "string"){
                StringClass.checkString(each)
            }

        })

    }

}
