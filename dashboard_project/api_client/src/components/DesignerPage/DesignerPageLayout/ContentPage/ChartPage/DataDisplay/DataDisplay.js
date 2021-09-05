import React, {Component} from "react";
import Plot from "react-plotly.js";
import Button from '@material-ui/core/Button';

import { connect } from "react-redux";

import "./dataDisplay.css";

{/*
    This is the component to display the plot, total six plots are available, when DataFormat component saves the data, the data will be transferred to here and display.
*/}

class DataDisplay extends Component{
    constructor(props){
        super(props);
        this.state={
            data: this.props.data,
            plotData: [],
        };
        this.handleDisplay = this.handleDisplay.bind(this);
    }

    static getDerivedStateFromProps(props, state){

        if(state.data !== props ){
            return{
                data: props,
            };
    	} 
    	return null
    }

    handleDisplay(){
        var chartType = this.state.data.chartType;
        var level = this.state.data.Level;
        var dataTable = this.state.data.dataTable;
        var firstAxisList = this.state.data.firstAxisList;
        var secondAxisList = this.state.data.secondAxisList;
        var thirdAxisList = this.state.data.thirdAxisList;

        var data_lineChart =[];
        var data_barChart = [];
        var data_scatterChart = [];

        for(var key in firstAxisList){
            var count = 0;
            for(var index in secondAxisList){
                var temp ={};
                temp['x'] = firstAxisList[key];
                temp['y'] = secondAxisList[index];

                if(chartType == "line_chart"){
                    temp['mode'] = "lines+markers";
                    temp['type'] = "line";
                    data_lineChart[count++] = temp;
                }else if(chartType == "bar_chart"){
                    temp['type'] = "bar";
                    data_barChart[count++] = temp;
                }else if(chartType == "dot_chart"){
                    temp['mode'] = "markers";
                    temp['type'] = "scatter";
                    data_scatterChart[count++] = temp;
                }else{
                    continue;
                }
            }
        }

        switch (chartType){
            case "line_chart":
                this.setState({
                    plotData: data_lineChart,
                });
                break;
            case "bar_chart":
                this.setState({
                    plotData: data_barChart,
                });
                break;
            case "dot_chart":
                this.setState({
                    plotData: data_scatterChart,
                });
                break;
            default:
                break;
        }
    }

    /*
    [
        {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
        },
        {type: 'line', x: [1, 2, 3], y: [2, 5, 3]},
    ]
    */

    render(){
        return(
            <div className="dataDisplay-root">
                <div className="dataDisplay-container">
                    <div className="dataDisplay">
                        <Plot
                            className="dataDisplay-plot"
                            data={this.state.plotData}
                            layout={{ 
                                width: 370, 
                                height: 320,
                                autosize:false, 
                                title: {text: 'Figure 1',xref: 'paper',x: 0.03,},
                                paper_bgcolor:'rgb(233,233,233)',
                                margin:{l:40,r:35,b:35,t:35,pad:1}
                            }}
                        />
                        <Button 
                            size="small" 
                            variant="contained" 
                            style={{
                                display: "inline-block",
                            }}
                            onClick={this.handleDisplay}
                        >
                            Display
                        </Button>
                    </div>
                    <div className="dataDisplay">
                        <Plot
                            className="dataDisplay-plot"
                            data={this.state.plotData}
                            layout={{ 
                                width: 370, 
                                height: 320,
                                autosize:false, 
                                title: {text: 'Figure 2',xref: 'paper',x: 0.03,},
                                paper_bgcolor:'rgb(233,233,233)',
                                margin:{l:40,r:35,b:35,t:35,pad:1}
                            }}
                        />
                        <Button 
                            size="small" 
                            variant="contained" 
                            style={{
                                display: "inline-block",
                            }}
                            onClick={this.handleDisplay}
                        >
                            Display
                        </Button>
                    </div>
                    <div className="dataDisplay">
                        <Plot
                            className="dataDisplay-plot"
                            data={this.state.plotData}
                            layout={{ 
                                width: 370, 
                                height: 320,
                                autosize:false, 
                                title: {text: 'Figure 3',xref: 'paper',x: 0.03,},
                                paper_bgcolor:'rgb(233,233,233)',
                                margin:{l:40,r:35,b:35,t:35,pad:1}
                            }}
                        />
                        <Button 
                            size="small" 
                            variant="contained" 
                            style={{
                                display: "inline-block",
                            }}
                            onClick={this.handleDisplay}
                        >
                            Display
                        </Button>
                    </div>
                </div>
                <div className="dataDisplay-container">
                    <div className="dataDisplay">
                        <Plot
                            className="dataDisplay-plot"
                            data={this.state.plotData}
                            layout={{ 
                                width: 370, 
                                height: 320,
                                autosize:false, 
                                title: {text: 'Figure 4',xref: 'paper',x: 0.03,},
                                paper_bgcolor:'rgb(233,233,233)',
                                margin:{l:40,r:35,b:35,t:35,pad:1}
                            }}
                        />
                        <Button 
                            size="small" 
                            variant="contained" 
                            style={{
                                display: "inline-block",
                            }}
                            onClick={this.handleDisplay}
                        >
                            Display
                        </Button>
                    </div>
                    <div className="dataDisplay">
                        <Plot
                            className="dataDisplay-plot"
                            data={this.state.plotData}
                            layout={{ 
                                width: 370, 
                                height: 320,
                                autosize:false, 
                                title: {text: 'Figure 5',xref: 'paper',x: 0.03,},
                                paper_bgcolor:'rgb(233,233,233)',
                                margin:{l:40,r:35,b:35,t:35,pad:1}
                            }}
                        />
                        <Button 
                            size="small" 
                            variant="contained" 
                            style={{
                                display: "inline-block",
                            }}
                            onClick={this.handleDisplay}
                        >
                            Display
                        </Button>
                    </div>
                    <div className="dataDisplay">
                        <Plot
                            className="dataDisplay-plot"
                            data={this.state.plotData}
                            layout={{ 
                                width: 370, 
                                height: 320,
                                autosize:false, 
                                title: {text: 'Figure 6',xref: 'paper',x: 0.03,},
                                paper_bgcolor:'rgb(233,233,233)',
                                margin:{l:40,r:35,b:35,t:35,pad:1}
                            }}
                        />
                        <Button 
                            size="small" 
                            variant="contained" 
                            style={{
                                display: "inline-block",
                            }}
                            onClick={this.handleDisplay}
                        >
                            Display
                        </Button>
                    </div>
                </div>
            </div>  
        ); 
    }
}

const mapStateToProps = state =>{
    return state.dataFormatReducer;
}

export default connect(mapStateToProps)(DataDisplay);
