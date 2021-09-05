import React, {Component} from "react";
import { 
    DataGrid, 
    GridToolbar, 
    GridToolbarContainer, 
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector,
} from "@material-ui/data-grid";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./dataFormat.css";
import tableList from "../tableList.js";

import { connect } from "react-redux";

/*
const columns = [
    { field: 'id', headerName: 'ID', cellClassName:'id-cell-color', headerAlign: 'left', align:'left', width: 300, type: 'number', editable: true,},
    { field: 'title', headerName: 'Title', cellClassName:'field-cell-color',  headerAlign: 'left', align:'left', width: 300, type: 'string', editable: true,},
    { field: 'count', headerName: 'Count', cellClassName:'count-cell-color',  headerAlign: 'left', align:'left', width: 300, type: 'number', editable: true,},
];

const rows = [
    {id: 0, title: 'row0', count: 20},
    {id: 1, title: 'row1', count: 40},
    {id: 2, title: 'row2', count: 60},
    {id: 3, title: 'row3', count: 80},
    {id: 4, title: 'row4', count: 100},
    {id: 5, title: 'row5', count: 120},
    {id: 6, title: 'row6', count: 140},
    {id: 7, title: 'row7', count: 160},
    {id: 8, title: 'row8', count: 180},
    {id: 9, title: 'row9', count: 200},
    {id: 10, title: 'row10', count: 220},
];
*/

const sendData = (data) => {
    return {
      type: 'From_DataFormat',
      data: data
    }
};

{/*
    This component is used to format the data selected from the DataInquery component, the material-ui data-grid is used to show the data, and user can select different row and column data which are used to be displayed and export  
*/}


class DataFormat extends Component{
    constructor(props){
        super(props);

        this.state={
            newSelectId: null,
            pageSize: 10,
            data: this.props.data,
            newSelectData: null,
        };

        this.handlePageSizeChange=this.handlePageSizeChange.bind(this);
        this.CustomToolbar=this.CustomToolbar.bind(this);
        this.handleDataChange=this.handleDataChange.bind(this);
        this.handleSelection=this.handleSelection.bind(this);
        this.saveData=this.saveData.bind(this);
    }

    static getDerivedStateFromProps(props, state){

        if(state.data !== props ){
            return{
                data: props,
            };
    	} 
    	return null
    }

    saveData(){

        if(!("Level" in this.state.data) && this.state.newSelectId == null){
            alert("You need to inquery the data first!")
        }

        if(("Level" in this.state.data) && this.state.newSelectId == null ){
            alert("You need to select at least one row in the table (click checkbox)!")
        }

        if(this.state.newSelectId !== null){
            var newData = JSON.parse(JSON.stringify(this.state.data));  
            var data = this.state.data
            var targetIndex = this.state.newSelectId

            for(var key in data){
                if(key == "firstAxisList"){
                    if(data[key] !== null){
                        for(var indexCol in data[key]){
                            var arr = []
                            for(var indexRow in data[key][indexCol]){
                                if(targetIndex.find((element) => element == indexRow)!== undefined){
                                    arr.push(data[key][indexCol][indexRow]);
                                }else{
                                    continue
                                }
                            }
                            newData[key][indexCol] = arr
                        }
                    }
                }else if(key == "secondAxisList"){
                    if(data[key] !== null){
                        for(var indexCol in data[key]){
                            var arr = []
                            for(var indexRow in data[key][indexCol]){
                                if(targetIndex.find((element) => element == indexRow)!== undefined){
                                    arr.push(data[key][indexCol][indexRow]);
                                }else{
                                    continue
                                }
                            }
                            newData[key][indexCol] = arr
                        }
                    }
                }else if(key == "thirdAxisList"){
                    if(data[key] !== null){
                        for(var indexCol in data[key]){
                            var arr = []
                            for(var indexRow in data[key][indexCol]){
                                if(targetIndex.find((element) => element == indexRow)!== undefined){
                                    arr.push(data[key][indexCol][indexRow]);
                                }else{
                                    continue
                                }
                            }
                            newData[key][indexCol] = arr
                        }
                    }
                }else {
                    continue;
                }
            }

            this.props.sendDataAction(newData)

            this.setState({
                newSelectData:newData,
            });
        }     
    }

    CustomToolbar(props){
        return(
            <GridToolbarContainer className="dataFormat-grid-toolbar">
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport />
                <Typography 
                    variant="h6" 
                    component="h6"
                    style={{
                        position: "absolute",
                        marginLeft: "450px",
                    }}
                >
                    {props.dataTable}{props.level}
                </Typography>
                <Button 
                    size="small" 
                    variant="contained" 
                    style={{
                        position: "absolute",
                        marginLeft: "995px",
                    }}
                    onClick={this.saveData}
                >
                    Save data
                </Button>
            </GridToolbarContainer>
        );
    }

    handlePageSizeChange(params){
        this.setState({
            pageSize: params.pageSize,
        });
    }

    handleDataChange(){
        var columnsList = [];
        var rowsList = [];

        columnsList.push({ field: 'id', headerName: 'id', headerAlign: 'left', align:'left', width: 50, type: 'number', editable: true,});

        var data = this.state.data;

        var level = data.Level;
        var dataTable = data.dataTable;

        if("data" in data){
            if(data.data == null){
                return[columnsList, rowsList, null, null];
            }
        }

        var rowsLength = null;

        var allDataCollection = [];
        
        for(var key in data){
            if(key == "firstAxisList"){
                if(data[key]!=null){
                    for(var index in data[key]){
                        if(rowsLength == null){
                            rowsLength = data[key][index].length
                        }
                        var fieldInput = index + " (" + key +")"
                        var headerNameInput = fieldInput
                        var cellClassNameInput = "firstAxis-cell-color"
                        
                        var axisCols = tableList.find(e => e.name == dataTable).columns
                        var axisType = axisCols.find(e => e.name == index).type
                        if( axisType == 'integer' || axisType == 'float'){
                            var typeInput = "number"
                        }else if(axisType == 'boolean'){
                            var typeInput = "boolean"
                        }else if(axisType == 'string'){
                            var typeInput = "string"
                        }else{
                            var typeInput = "dateTime"
                        }
                        columnsList.push({ field: fieldInput, headerName: headerNameInput, cellClassName:cellClassNameInput, headerAlign: 'left', align:'left', width: 200, type: typeInput, editable: true,});
                        allDataCollection.push(data[key][index]);
                    }
                }else{
                    continue;
                }  
            }else if(key == "secondAxisList"){
                if(data[key]!=null){
                    for(var index in data[key]){
                        var fieldInput = index + " (" + key +")"
                        var headerNameInput = fieldInput
                        var cellClassNameInput = "secondAxis-cell-color"
                        
                        var axisCols = tableList.find(e => e.name == dataTable).columns
                        var axisType = axisCols.find(e => e.name == index).type
                        if( axisType == 'integer' || axisType == 'float'){
                            var typeInput = "number"
                        }else if(axisType == 'boolean'){
                            var typeInput = "boolean"
                        }else if(axisType == 'string'){
                            var typeInput = "string"
                        }else{
                            var typeInput = "dateTime"
                        }
                        columnsList.push({ field: fieldInput, headerName: headerNameInput, cellClassName:cellClassNameInput, headerAlign: 'left', align:'left', width: 200, type: typeInput, editable: true,});
                        allDataCollection.push(data[key][index]);
                    }
                }else{
                    continue;
                }  
            }else if(key == "thirdAxisList"){
                if(data[key]!=null){
                    for(var index in data[key]){
                        var fieldInput = index + " (" + key +")"
                        var headerNameInput = fieldInput
                        var cellClassNameInput = "thirdAxis-cell-color"
                        
                        var axisCols = tableList.find(e => e.name == dataTable).columns
                        var axisType = axisCols.find(e => e.name == index).type
                        if( axisType == 'integer' || axisType == 'float'){
                            var typeInput = "number"
                        }else if(axisType == 'boolean'){
                            var typeInput = "boolean"
                        }else if(axisType == 'string'){
                            var typeInput = "string"
                        }else{
                            var typeInput = "dateTime"
                        }
                        columnsList.push({ field: fieldInput, headerName: headerNameInput, cellClassName:cellClassNameInput, headerAlign: 'left', align:'left', width: 200, type: typeInput, editable: true,});
                        allDataCollection.push(data[key][index]);
                    }
                }else{
                    continue;
                }  
            }else{
                continue;
            }
        }

        var idArray = [];
        for(var i=0; i<rowsLength; i++){
            idArray.push(i);
        }

        allDataCollection.unshift(idArray);

        var newAllDataCollection = allDataCollection[0].map(function(col, i) {
                return allDataCollection.map(function(row) {
                return row[i];
            })
        });
      
        for(var i=0; i<rowsLength; i++){
            var item = {};
            for(var j=0; j<newAllDataCollection[i].length; j++){
                item[columnsList[j].field] = newAllDataCollection[i][j]
            }
            rowsList.push(item);
        }

        var levelStr = " (Level " + level + ")";

        return [columnsList, rowsList, dataTable, levelStr];

        //{id: 0, title: 'row0', count: 20},
        //{ field: 'id', headerName: 'ID', cellClassName:'id-cell-color', headerAlign: 'left', align:'left', width: 300, type: 'number', editable: true,},
        //tableList.find(e => e.name == this.state.Level_1_table_selectedOption.value);
        
    }

    handleSelection(newSelection){
        this.setState({
            newSelectId: newSelection,
        });
    }

    render(){
        let colRowTableList = this.handleDataChange();
        const colsList = colRowTableList[0], rowsList = colRowTableList[1], dataTable = colRowTableList[2], levelStr = colRowTableList[3];

        return(
            <div className="dataFormat">
                <DataGrid
                    className="dataFormat-grid"
                    rows={rowsList}
                    rowHeight={35}
                    columns={colsList}
                    pageSize={this.state.pageSize}
                    onPageSizeChange={this.handlePageSizeChange}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination
                    checkboxSelection={true}
                    disableSelectionOnClick
                    components={{
                        Toolbar: this.CustomToolbar,
                    }}
                    componentsProps={{ 
                        toolbar: { dataTable: dataTable, level: levelStr == null? "": levelStr} 
                    }}
                    onSelectionModelChange={this.handleSelection}
                />
            </div>
        ); 
    }
}

const mapStateToProps = state =>{
    return state.dataInqueryReducer;
}

const mapDispatchToProps = (dispatch) => {
    return{
        sendDataAction: (data) => {dispatch(sendData(data))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataFormat);
