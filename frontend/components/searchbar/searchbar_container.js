import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getSearchResults } from "../../actions/search_actions";
import SearchBar from "./searchbar";

const mapStateToProps = state => ({
  searchResults: state.entities.searchResults
});

const mapDispatchToProps = dispatch => ({
  getSearchResults: query => dispatch(getSearchResults(query))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));