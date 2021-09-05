import {combineReducers} from "redux";
import {dataInqueryReducer} from "../Reducer/DataInqueryReducer.js";
import {dataFormatReducer} from "../Reducer/DataFormatReducer.js";

const rootReducer = combineReducers({
    dataInqueryReducer,
    dataFormatReducer,
});

export default rootReducer;