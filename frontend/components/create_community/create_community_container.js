import { connect } from "react-redux";
import CreateCommunityForm from "./create_community";
import { createCommunity } from '../../actions/community_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors, session }) => ({
  errors: errors.communityForm,
  currentUserId: session.currentUserId
});

const mapDispatchToProps = () => ({
  processForm: community => dispatch(createCommunity(community)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCommunityForm);