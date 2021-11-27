import React from "react";
import { Route, Switch } from "react-router";
import NavContainer from "./navbar/nav_container";
import Modal from "./modal/modal";
import Sidebar from "./sidebar/side";
import { Link } from "react-router-dom";
import CommunityPageContainer from "./community_page/community_page_container";

const App = () => (
  <div>
    <Modal />
    <header>
      <Link to='/'>
        <h1 className='logo'>peroos</h1>
      </Link>
      <NavContainer />
    </header>

    <main>
      <section>
        <Switch>
          {/* <Route path='/submit' component={props => <CreatePostContainer {...props} />} />
          <Route path='/communities' component={props => <CommunitiesList {...props} />} />
          <Route path='/:communityTitle/comments/:postId' component={props => < {...props} />} /> */}
          <Route path='/:communityTitle' component={props => <CommunityPageContainer {...props} />} />
        </Switch>
      </section>

      <Sidebar />
    </main>

  </div>
)

export default App; 