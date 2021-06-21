import StringClass from "./String";

export default class ArrayClass {

   static checkArray(Arr) {
        Arr.map(each=>{
            if (typeof each === "string" &&  StringClass.checkString(each)){
                return true;
            }
        })
    }

}
