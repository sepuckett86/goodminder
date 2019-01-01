import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import AuthService from './AuthService';


class Login extends Component {

     constructor(props){
        super(props);
        this.state = {
            email : '',
            password: '',
        }
        this.Auth = new AuthService();
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

     }

     // Why don't I need to bind(this) to onChange? Because it's binding in render.
     //

     componentWillMount() {
       if(this.Auth.loggedIn())
          this.props.history.push('/example');
      }

     handleFormSubmit(e){
        e.preventDefault();
        this.Auth.login(this.state.email,this.state.password)
            .then(res =>{
              this.props.history.push('/example');
            })
            .catch(err =>{
                alert(err);
            })
    }
     /*handleFormSubmit(e){
        // prevent default submit action for form??
        e.preventDefault();
        // defines email as this.state.email
        // defines password as this.state.password
        const {email , password} = this.state ;
        axios.post('api/auth/login', {
            email,
            password
          })
          .then(response=> {
            this.setState({err: false});
            this.props.history.push("home") ;

          })
          .catch(error=> {
            this.refs.email.value="";
            this.refs.password.value="";
            this.setState({err: true});
          });
     }*/

     onChange(e){
        const {name, value} = e.target;
        // const {target: {name, value}} = e;
        this.setState({[name]: value});
     }

	render() {

        let error = this.state.err ;
        let msg = (!error) ? 'Login Successful' : 'Wrong Credentials' ;
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
	    return (
            <div >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-heading">Login</div>
                                <div className="panel-body">
                                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                        {error != undefined && <div className={name} role="alert">{msg}</div>}
                                    </div>
                                    <form className="form-horizontal" role="form" method="POST" onSubmit= {this.handleFormSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>

                                            <div className="col-md-6">
                                                <input id="email" type="email" ref="email" className="form-control" name="email"  onChange={this.onChange.bind(this)} required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password" className="col-md-4 control-label">Password</label>

                                            <div className="col-md-6">
                                                <input id="password" type="password" ref="password" className="form-control" name="password"  onChange={this.onChange.bind(this)}  required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-md-6 col-md-offset-4">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" name="remember" /> Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-md-8 col-md-offset-4">
                                                <button type="submit" className="btn btn-primary">
                                                    Login
                                                </button>

                                                <li className="btn btn-link">
                                                    <Link to = "forgotpassword">Forgot Your Password?</Link>
                                                </li>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

	);
}
}

export default Login;
