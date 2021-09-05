const initState = {
    type: null,
    Data: null
};

exports.dataFormatReducer = (state = initState, action) => {
    console.log(action.data)
    switch(action.type){
        case "From_DataFormat":
            return(
                type = action.type,
                Data = action.data
            );
        default:
            return state;
    }
};