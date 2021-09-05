import React, {Component} from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import "./designer.css";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Header from "./DesignerPageLayout/HeaderLayout/Header";
import Footer from "./DesignerPageLayout/Footer";
import LeftBar from "./DesignerPageLayout/LeftBarLayout/LeftBar";
import Chart from "./DesignerPageLayout/ContentPage/ChartPage/Chart"
import Personal from "./DesignerPageLayout/ContentPage/PersonalPage/Personal"
import Record from "./DesignerPageLayout/ContentPage/SettingPage/Record"

{/*
    The designer page structure is set by using the Grid label, make sure the Router label covers the Left bar and content as close as possible.
*/}

export default class DesignerPage extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <Grid container spacing={0} className="designer">
                <Router>
                    <Grid item xs={2} className="designer-leftBar">
                        <Grid item xs={12}>
                            <LeftBar />
                        </Grid>
                    </Grid>
                    <Grid item xs={10} container className="designer-rightContent">
                        <Grid item xs container direction="column" spacing={0}>
                            <Grid item className="designer-rightContent-header">
                                <Header username={this.props.location.state.username}/>
                            </Grid>
                            <Grid item className="designer-rightContent-content">
                                <Switch>
                                    <Route exact path="/api_client/designer/chart" component={Chart}/>
                                    <Route exact path="/api_client/designer/personal" component={Personal}/>
                                    <Route exact path="/api_client/designer/setting/record" component={Record}/>
                                    <Redirect to="/api_client/designer/chart" />
                                </Switch>
                            </Grid>
                            <Grid item className="designer-rightContent-footer">
                                <Footer />
                            </Grid>
                        </Grid>
                    </Grid>
                </Router>
            </Grid>
        ); 
    }
}
