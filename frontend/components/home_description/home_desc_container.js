import { connect } from "react-redux";
import HomeDesc from "./home_desc";
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = ({ session, entities }) => ({
  currentUserId: session.currentUserId,
  // currentUser: entities.users[session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeDesc);