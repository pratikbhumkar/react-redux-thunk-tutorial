import {IncreaseAge,DecreaseAge} from "./Operations/AgeOperations";

const AGE_UP = {Type:"AGE_UP", Payload: IncreaseAge};
const AGE_DOWN= {Type:"AGE_DOWN", Payload: DecreaseAge};

const AgeTypes=[AGE_UP, AGE_DOWN];

export default AgeTypes;