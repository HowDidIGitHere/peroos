import { connect } from "react-redux";
import HomePage from "./home_page";

const mapStateToProps = state => ({
  session: state.session.currentUserId
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);