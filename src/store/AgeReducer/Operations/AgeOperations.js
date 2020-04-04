import Age from "../Models/Age";

const DecreaseAge = (state=Age) =>{
    state.count--;
    return state;
}


const IncreaseAge = (state= Age) =>{
    state.count++;
    return state;
}

const ageUp= () =>{
    return dispatch=>{
        setTimeout(() =>{
            dispatch({type:"AGE_UP"})
        },2000)
    }
}


export {DecreaseAge, IncreaseAge, ageUp};
