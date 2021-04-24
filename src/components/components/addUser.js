import React, {useRef } from "react";
import { connect } from "react-redux";
import * as userActions from "../../actions/index";
import { useHistory } from 'react-router-dom'

const AddUser = (props) => {
    const history = useHistory();
    const firstNameRef = useRef(null);
    const jobRef = useRef(null);
    
    const submitUser = () => {
      const payload = {
        name: firstNameRef?.current.value || "",
        job:jobRef?.current.value || ""
      }
      props.createUser(payload);
      alert("User Created");
      history.push("/");
    }

    return (
        <div>
            <div>
              <input placeholder="First Name" type="text" ref={firstNameRef}/>
            </div>
            <br></br>
            <div>
              <input placeholder="Job" type="text" ref={jobRef}/>
            </div>
            <br></br>
            <div>
              <button onClick={submitUser}>Submit</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      users: state.users
    };
  };
  
  const mapDispachToProps = dispatch => {
    return {
      createUser: (data) => dispatch(userActions.createUser(data))
    };
  };
  export default connect(
    mapStateToProps,
    mapDispachToProps
  )(AddUser);