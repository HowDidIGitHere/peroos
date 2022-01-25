import React from "react";
import { Route, Switch } from "react-router";
import NavContainer from "./navbar/nav_container";
import Modal from "./modal/modal";
import { Link } from "react-router-dom";
import CommunityPageContainer from "./community_page/community_page_container";
import CommunitiesListContainer from "./communities_list/communities_list_container";
import HomePageContainer from "./home/home_page_container";
import { ProtectedRoute } from "../util/route_utils";
import CreatePostContainer from "./create_post/create_post_container";
import SearchBarContainer from "./searchbar/searchbar_container";
import PostContainer from "./post/post_container";

const App = () => (
  <div>
    <Modal />
    <header>
      <Link to='/'>
        <h1 className='logo'>
          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="product-hunt" className="svg-inline--fa fa-product-hunt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z"></path>
          </svg>
          eroos
        </h1>
      </Link>
      <SearchBarContainer />
      <NavContainer />
    </header>
    <div className='hidden-buffer'></div>

    <main>
      <Switch>
        <ProtectedRoute path='/submit' component={props => <CreatePostContainer {...props} />} />
        <ProtectedRoute path='/:communityTitle/submit' component={props => <CreatePostContainer {...props} />} />
        <Route path='/communities' component={props => <CommunitiesListContainer {...props} />} />
        <Route path='/:communityTitle/comments/:postId' component={props => <PostContainer {...props} />} />
        <Route path='/:communityTitle' component={props => <CommunityPageContainer {...props} />} />
        <Route path='/' component={props => <HomePageContainer {...props}/>} />
      </Switch>
    </main>

  </div>
)

export default App; 