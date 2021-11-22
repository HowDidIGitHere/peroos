import React from "react";
import { Route } from "react-router";
import Nav from "./navbar/nav";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import Modal from "./modal/modal";

const App = () => (
  <div>
    <Modal /> 
    <header>
      <h1>Peroos</h1>
      <Nav />
    </header>

    {/* <Route path='/login' component={props => <LoginFormContainer {...props}/>} />
    <Route path='/signup' component={props => <SignupFormContainer {...props}/>} /> */}
  </div>
)

export default App; 