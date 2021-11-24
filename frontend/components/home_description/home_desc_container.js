import { connect } from "react-redux";
import HomeDesc from "./home_desc";
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeDesc);