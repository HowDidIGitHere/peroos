import React from "react";
import { closeModal } from '../../actions/modal_actions'
import { connect } from "react-redux";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import CreateCommunityContainer from '../home_description/home_desc_container'

const Modal = ({ modal }) => {
  if (!modal) return null;

  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />
      break;
    case 'signup':
      component = <SignupFormContainer />
      break;
    case 'createCommunity':
      component = <CreateCommunityContainer />
    default:
      return null;
  }

  return (
    <div className='modal-background'>
      <div className='modal-child'>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  modal: state.ui.modal
});

export default connect(mapStateToProps)(Modal);
