import { connect } from "react-redux";
import CreateCommunityForm from "./create_community";
import { createCommunity, followCommunity } from '../../actions/community_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from "react-router-dom";

const mapStateToProps = ({ errors, session }) => ({
  errors: errors.communityForm,
  sessionId: session.currentUserId
});

const mapDispatchToProps = (dispatch) => ({
  processForm: community => dispatch(createCommunity(community)),
  closeModal: () => dispatch(closeModal()),
  follow: follow => dispatch(followCommunity(follow))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateCommunityForm));