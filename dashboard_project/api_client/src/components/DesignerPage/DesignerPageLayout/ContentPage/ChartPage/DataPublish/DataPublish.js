import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import "./dataPublish.css";

{/*
    This component is used to export the data to txt file or email, the email is using emailjs-com API, check readme file. it may consider to add other functions to save the data to database. When the DataFormat component saves the data, the data can be exported from here.
*/}

class DataPublish extends Component{
    constructor(props){
        super(props);
        this.state={
            data: this.props.data,
        };
        this.handlePublishToSave = this.handlePublishToSave.bind(this);
        this.handlePublishToEmail = this.handlePublishToEmail.bind(this);
    }

    static getDerivedStateFromProps(props, state){

        if(state.data !== props ){
            return{
                data: props,
            };
    	} 
    	return null
    }

    handlePublishToSave(){
        console.log(this.state.data)
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(this.state.data)], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "data.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        console.log("txt file saved successfully!")
    }

    handlePublishToEmail(){

        const {data} =this.state

        let templateParams = {
            from_name: 'lslsls0001@gmail.com',
            to_name: 'Yibo Li',
            subject: 'This is a test email',
            message: JSON.stringify(data),
        }

        emailjs.send('service_5z30vcc', 'template_9cmfjnu', templateParams, 'user_juowLfBiCYqVdTRtmaRD9')
        .then((result) => {
            Swal.fire({
                title: 'Email Successfully Sent',
                icon: 'success'
            })
        }).catch(err => {
            Swal.fire({
              title: 'Email Failed to Send',
              icon: 'error'
            })
            console.error('Email Error:', err)
        })
    }
    
    render(){
        return(
            <div className="dataPublish-container">
                <div className="dataPublish-text">
                    <span>Do you want to export the data?</span>
                </div>
                <div className="dataPublish-button">   
                    <Button 
                        size="small" 
                        variant="contained" 
                        style={{
                            margin: "5px",
                            display: "inline-block",
                        }}
                        onClick={this.handlePublishToSave}
                    >
                        Save to txt
                    </Button>
                    <Button 
                        size="small" 
                        variant="contained" 
                        style={{
                            margin: "5px",
                            display: "inline-block",
                        }}
                        onClick={this.handlePublishToEmail}
                    >
                        Send to email
                    </Button>
                </div>
            </div>
        ); 
    }
}

const mapStateToProps = state =>{
    return state.dataFormatReducer;
}

export default connect(mapStateToProps)(DataPublish);
