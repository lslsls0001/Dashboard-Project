import React, {Component} from "react";
import "./login.css";
import logo from "../../../static/images/chip.png";
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

{/* 
    This is the login page, the user can login to the designer dashboard by using their username and password.
*/}

export default class LoginPage extends Component{
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
            data: ''
        };
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit(event){
        
        event.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
        };

        //when the user input is ok, it sends the request to the server and let the server to match the username and password record in the database, if the matching result is ok, server returns "login successful", if not, server returns "login failure". Then, user has been redirect to the designer dashboard.
        fetch("/api_server/user", requestOptions).then((response)=>response.json()).then((data) => {
            this.state.data = data
            const errorMsg = document.getElementById("error-msg")
            errorMsg.innerHTML=this.state.data.msg
            if(this.state.data.msg == "login successful"){
                var user_name = this.state.username
                this.setState({
                    username: '',
                    password: '',
                },()=>{
                    this.props.history.push({
                        pathname : '/api_client/designer',
                        state :{
                            username:user_name
                        }
                    })
                });
            }
        });
        
       /*
        event.preventDefault();
        const userName = this.state.username
        const userPass = this.state.password
        console.log(userName+"----"+userPass)
        */
    }

    //using the validatorForm to handle with the user input, it has regex expression to judege the input format.
    render(){
        const {username, password} = this.state;

        return(
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>ONTO Innovation User Login System</h1>
                </header>
                <section className="login-content">
                    <h2>User Login</h2>
                    <ValidatorForm 
                        noValidate 
                        autoComplete="off"
                        ref="form"
                        onSubmit={this.handleSubmit.bind(this)}
                        onError={errors => console.log(errors)}
                    >
                        <TextValidator
                            id="username"
                            label="Username"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                                ),
                            }}
                            type="username"
                            name="username"
                            value={username}
                            validators={['required','matchRegexp:^[a-zA-Z0-9_-]{8,16}$']}
                            errorMessages={['this field is required','Username has 8 to 16 characters (letters, numbers, underlines and minus signs).']}
                            autoComplete="username"
                            margin="normal"
                            variant="outlined"
                            size="small"
                            fullWidth
                            required
                            autoFocus
                            onChange={this.handleChange.bind(this)}
                        />
                        <TextValidator
                            id="password"
                            label="Password"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <Lock />
                                </InputAdornment>
                                ),
                            }}
                            type="password"
                            name="password"
                            value={password}
                            validators={['required','matchRegexp:^.*(?=.{8,})(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[_!@#$%-^&*?]).*$']}
                            errorMessages={['this field is required','Password has at least 8 characters (at least one upper letter, one lower letter, one number, and one special character).']}
                            autoComplete="password"
                            margin="normal"
                            variant="outlined"
                            size="small"
                            fullWidth
                            required
                            onChange={this.handleChange.bind(this)}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="inherit"
                            size="small"
                            margin="normal"
                        >
                            Login
                        </Button>
                        <div className="login-content-error">
                            <span id="error-msg" style={{color: "rgba(255,53,49,0.8)", fontFamily: "cursive"}}></span>
                        </div>
                    </ValidatorForm>
                </section>
            </div>
        );
    }
}
