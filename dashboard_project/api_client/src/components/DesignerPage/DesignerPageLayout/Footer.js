import React, {Component} from "react";
import Typography from '@material-ui/core/Typography';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import Copyright from '@material-ui/icons/Copyright';
import Linkedin from '@material-ui/icons/LinkedIn';
import Facebook from '@material-ui/icons/Facebook';

export default class Footer extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <Typography variant="body2" align="center">
                <Email style={{verticalAlign: "middle", marginRight: "5px"}}/>
                <a href="mailto:info@ontoinnovation.com" target="view_window"
                    style={{display: "inline-block", marginTop: "7px", marginRight: "30px",}}
                >
                    info@ontoinnovation.com
                </a>

                <Phone style={{verticalAlign: "middle", marginRight: "5px"}}/>
                <a href="tel:9782536200" target="view_window"
                    style={{display: "inline-block", marginTop: "7px", marginRight: "30px"}}
                >
                    (978) 253-6200
                </a>

                <Linkedin style={{verticalAlign: "middle", marginRight: "5px"}}/>
                <a href="https://www.linkedin.com/company/onto-innovation/" target="view_window"
                    style={{display: "inline-block", marginTop: "7px", marginRight: "30px"}}
                >
                    LINKEDIN
                </a>

                <Facebook style={{verticalAlign: "middle", marginRight: "5px"}}/>
                <a href="https://www.facebook.com/ontoinnovation" target="view_window"
                    style={{display: "inline-block", marginTop: "7px", marginRight: "30px"}}
                >
                    FACEBOOK
                </a>

                <Copyright style={{verticalAlign: "middle", marginRight: "5px"}}/>
                <span style={{marginRight: "10px"}}>
                    2021 Onto Innovation.
                </span>
                <a href="https://ontoinnovation.com/legal-privacy" target="view_window"
                    style={{display: "inline-block", marginTop: "7px"}}
                >
                Legal & Privacy
                </a>
            </Typography>
        ); 
    }
}