
import { connect } from "react-redux";
import {removeTodo} from "../../Redux/Action";
import ManageTask from "../../components/ManageTask";


const mapStateToProps = state => ({
    todos: state.todos
  })
  
  const mapDispatchToProps = dispatch => ({
    removeToDo: index => dispatch(removeTodo(index))
  })
export default connect(mapStateToProps,mapDispatchToProps)(ManageTask);