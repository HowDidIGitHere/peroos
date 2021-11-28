import { connect } from "react-redux";
import CommunitiesList from "./communities_list";
import { getAllCommunities } from "../../actions/community_actions";

const mapStateToProps = state => ({
  allCommunities: Object.values(state.entities.communities)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllCommunities: () => dispatch(getAllCommunities()),

});

export default connect(mapStateToProps, mapDispatchToProps)(CommunitiesList);