const initState = {
    type: null,
    data: null
};

exports.dataInqueryReducer = (state = initState, action) => {
    switch(action.type){
        case "From_DataInqueryLevel_1":
            return(
                type = action.type,
                data = action.data
            );
        case "From_DataInqueryLevel_2":
            return(
                type = action.type,
                data = action.data
            );
        default:
            return state;
    }
};