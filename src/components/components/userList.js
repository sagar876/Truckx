import React, {useEffect, useState } from "react";
import { connect } from "react-redux";
import * as userActions from "../../actions/index";
const tableHeaders = ["Name","Email","Avatar","Actions"];

const UserList = (props) => {
    const [searchResults, setSearchResults] = useState([]);
    const { getUsers, users, deleteUser } = props;

    useEffect(()=>{
       getUsers();
    },[]);

    const handleSearch = (e) => {
      const value = e.target.value;
      const filteredData = props.users.filter(item=>
        {
          if(item?.first_name.indexOf(value) >-1 || item?.last_name.indexOf(value) >-1 || item?.email.indexOf(value) >-1){
            return item;
          }
        }
      )
      if(value.length){
        setSearchResults(filteredData);
      }
      else{
        setSearchResults([]);
      }
    }

    const tableData = searchResults.length > 0 ? searchResults : users;
    return (
        <div>
          <div className="container">
            
            <div>
              <input placeholder="Search..." type="search" className="search-bar" onChange={handleSearch}/>
            </div>
            <table id="users">
                <thead>
                  <tr>
                  {
                    tableHeaders.map(header=> <th key={header}>{header}</th>)
                  }
                  </tr>
                </thead>
                <tbody>
                    {
                      tableData?.map(item=> {
                        return ( <tr key={item?.id}>
                        <td>{item?.first_name} {item?.last_name}</td>
                        <td>{item?.email}</td>
                        <td><img src={item?.avatar}/></td>
                        <td>
                          <button onClick={()=> deleteUser(item?.id)}>Delete</button>
                        </td>
                        </tr>)
                      })
                    }
                </tbody>
              </table>
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
      getUsers: () => dispatch(userActions.getUsers()),
      deleteUser: (id) => dispatch(userActions.deleteUser(id))
    };
  };
  export default connect(
    mapStateToProps,
    mapDispachToProps
  )(UserList);