import React from "react";
import { Route } from "react-router";
import NavContainer from "./navbar/nav_container";
import Modal from "./modal/modal";
import Sidebar from "./sidebar/side";

const App = () => (
  <div>
    <Modal />
    <header>
      <h1 className='logo'>Peroos</h1>
      <NavContainer />
    </header>

    <main>
      <section>
        {/* Posts placeholder */}
      </section>

      <Sidebar />
    </main>

    {/* <Route path='/login' component={props => <LoginFormContainer {...props}/>} />
    <Route path='/signup' component={props => <SignupFormContainer {...props}/>} /> */}
  </div>
)

export default App; 