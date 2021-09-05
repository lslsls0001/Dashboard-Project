import React, {Component} from "react";
import Paper from '@material-ui/core/Paper';

import DataInqueryLevel_1 from "./DataInquery/DataInqueryLevel_1";
import DataInqueryLevel_2 from "./DataInquery/DataInqueryLevel_2";
import DataFormat from "./DataFormat/DataFormat";
import DataDisplay from "./DataDisplay/DataDisplay";
import DataPublish from "./DataPublish/DataPublish";

import rootReducer from "./Store";
import { Provider } from "react-redux";
import {createStore} from "redux";

import './chart.css';

const store = createStore(rootReducer);

export default class Chart extends Component{
    constructor(props){
        super(props);

        this.state={
            dataShare : null,
        }

        this.dataSharedBetweenLevels=this.dataSharedBetweenLevels.bind(this);
    }

    dataSharedBetweenLevels(data){
        this.setState({
            dataShare: data
        });
    }
    
    render(){
        return(
            <Paper className="chart">
                <Provider store={store}>
                    <div className="chart-selection">
                        <span className="chart-selection-description">please select and format the data you want to show</span>
                        <hr className="chart-selection-divider" data-content="Level 1"></hr>
                        <DataInqueryLevel_1 data={this.dataSharedBetweenLevels}/>
                        <hr className="chart-selection-divider" data-content="Level 2"></hr>
                        <DataInqueryLevel_2 data={this.state.dataShare}/>
                        <hr style={{width: "97%", marginLeft:"15px", height: "0.5px",backgroundColor: "#d0d0d5", border:"none", zIndex:"2"}}/>
                        <DataFormat />
                    </div>
                    <div className="chart-display">
                        <span className="chart-display-description">the charts will be shown in here</span>
                        <DataDisplay />
                    </div>
                    <div className="chart-publish">
                        <span className="chart-publish-description">the data publish options are shown here</span>
                        <DataPublish />
                    </div>
                </Provider>
            </Paper>
        ); 
    }
}

