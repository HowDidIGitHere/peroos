import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Nav from "./nav";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = ({ session, entities }) => ({
  currentUser: entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);