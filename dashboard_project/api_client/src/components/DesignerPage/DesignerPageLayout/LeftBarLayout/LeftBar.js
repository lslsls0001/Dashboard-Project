import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import BarChartTwoToneIcon from '@material-ui/icons/BarChartTwoTone';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import StarBorder from '@material-ui/icons/StarBorder';

import "./leftBar.css";
import designer_logo from "../../../../../static/images/designer_logo.png";

class LeftBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: true
        };
    }

    handleClose = (event) => {
      
    };

    handleClick = () => {
        this.setState({open:!this.state.open});
    };
    
    render(){
        
        const path = this.props.location.pathname;

        return(
            <div className="left-nav">
                <header className="left-nav-header">
                    <img src={designer_logo} alt="logo"/>
                    <Link style={{textDecoration:"none"}} to="/api_client/designer/chart">
                        <h3>ONTO</h3>
                    </Link>
                </header>
                <section>
                    <List component="nav" aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader" style={{color:"white", fontSize:"18px", position:"relative"}}>
                                Menu Items
                            </ListSubheader>
                        } 
                    >
                        <Link style={{textDecoration:"none"}} to="/api_client/designer/chart">
                            <ListItem button selected={path==="/api_client/designer/chart"?true:false}>
                                <ListItemIcon>
                                    <BarChartTwoToneIcon style={{color:"white", margin:"5px 5px"}}/>
                                </ListItemIcon>
                                <ListItemText primary="Chart" style={{color:"white", fontSize:"15px"}}/>
                            </ListItem>
                        </Link>
                        <Link style={{textDecoration:"none"}} to="/api_client/designer/personal">
                            <ListItem button selected={path==="/api_client/designer/personal"?true:false}>
                                <ListItemIcon>
                                    <PersonIcon style={{color:"white", margin:"5px 5px"}}/>
                                </ListItemIcon>
                                <ListItemText primary="Personal" style={{color:"white", fontSize:"15px"}}/>
                            </ListItem>
                        </Link>
                        <ListItem button onClick={this.handleClick.bind(this)}>
                            <ListItemIcon>
                                <SettingsIcon style={{color:"white", margin:"5px 5px"}}/>
                            </ListItemIcon>
                            <ListItemText primary="Setting" style={{color:"white", fontSize:"15px"}}/>
                            {this.state.open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <Link style={{textDecoration:"none"}} to="/api_client/designer/setting/record">
                                    <ListItem button style={{paddingLeft:"30px"}} 
                                        selected={path==="/api_client/designer/setting/record"?true:false}
                                    >
                                        <ListItemIcon>
                                            <StarBorder style={{color:"white", margin:"5px 5px"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary="Record" style={{color:"white", fontSize:"15px"}}/>
                                    </ListItem>
                                </Link>
                            </List>
                        </Collapse>
                    </List>
                </section>
            </div>
        ); 
    }
}

export default withRouter(LeftBar)
