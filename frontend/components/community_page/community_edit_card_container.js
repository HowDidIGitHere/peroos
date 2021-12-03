import { connect } from "react-redux";
import { withRouter } from "react-router";
import { editCommunity } from "../../actions/community_actions";
import CommunityEditCard from "./community_edit_card";

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  editCommunity: community => dispatch(editCommunity(community))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommunityEditCard))