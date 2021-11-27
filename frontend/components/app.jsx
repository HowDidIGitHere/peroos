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
        <Route path='/communities' component={props => <CommunitiesList {...props} />} />
      </section>

      <Sidebar />
    </main>

  </div>
)

export default App; 