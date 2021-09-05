import React, {Component} from "react";
import AdministratorPage from "./AdministratorPage/AdministratorPage";
import DesignerPage from "./DesignerPage/DesignerPage";
import ViewerPage from "./ViewerPage/ViewerPage";
import LoginPage from "./LoginPage/LoginPage";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

{/* 
    This one has a router to dispatch the components with specific url, easy to jump among pages.
*/}

export default class HomePage extends Component{
    constructor(props){
       super(props);
    }

    render(){
        return(
            <Router>
                <Switch> 
                    <Route exact path="/api_client/" >
                        <h1>This is the home page</h1>
                    </Route>
                    <Route path="/api_client/administrator" component={AdministratorPage} />
                    <Route path="/api_client/designer" component={DesignerPage} />
                    <Route path="/api_client/viewer" component={ViewerPage} />
                    <Route path="/api_client/login" component={LoginPage} />

                    <Redirect to="/api_client/" />
                </Switch>
            </Router>
        );
    }
}

