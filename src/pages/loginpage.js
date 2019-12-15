import React, {Component} from "react";
import { Link } from "react-router-dom";
import '../App.css'
class LoginPage extends Component{
  constructor(){
    super()
   
    this.state={
      login:"",
      password:"",
      rememberMe:false
    }
this.handleFormSubmit=this.handleFormSubmit.bind(this)
this.handleChange=this.handleChange.bind(this)
  }
  handleChange(event){
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    this.setState({ [input.name]: value }); 
  }
  
  handleFormSubmit(){
    
    const { login, rememberMe, password } = this.state;

      localStorage.setItem('login', rememberMe ? login : '' );
      localStorage.setItem('password', rememberMe ? password : '');
      setTimeout(() => localStorage.clear(), 30000);
 
  
  }
  componentDidMount() {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const login = rememberMe ? localStorage.getItem('login') : '';
    const password = rememberMe ? localStorage.getItem('password') : '';
    this.setState({login, password, rememberMe });
  }
  render(){
    return (
    <form className="loging" onSubmit={this.handleFormSubmit} >
        <label>Login</label><br/>
        <input  name="login" value={this.state.login} type="text" placeholder="Enter your login" onChange={this.handleChange}/><br/>
        <label>Password</label><br/>
        <input  name="password" value={this.state.password} type="password" placeholder="Enter your password" onChange={this.handleChange}/><br/>
        <input name="rememberMe" checked={this.state.rememberMe} type="checkbox" onChange={this.handleChange}/><label>remember me</label><br/>
      <div><Link onClick={this.handleFormSubmit} to="/main"><button >Enter</button></Link></div>
      </form>
    );
  }
}
  export default LoginPage;