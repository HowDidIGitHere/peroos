import React from "react";
import { Route } from "react-router";
import NavContainer from "./navbar/nav_container";
import Modal from "./modal/modal";
import HomeDescContainer from "./home_description/home_desc_container";

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
      <aside>
        {/* <TopCommunitiesContainer /> */}
        <HomeDescContainer />
        {/* <Footer /> */}
      </aside>
    </main>

    {/* <Route path='/login' component={props => <LoginFormContainer {...props}/>} />
    <Route path='/signup' component={props => <SignupFormContainer {...props}/>} /> */}
  </div>
)

export default App; 