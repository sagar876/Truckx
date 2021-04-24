const initialState = {
  users: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERS_RECEIVED": {
      return {
        ...state,
        users: [...action.payload]
      };
    }
    case "USER_DELETED": {
      return {
        ...state,
       data:action.payload
      };
    }
    case "USER_CREATED":
      return {
        ...state,
        data:action.payload
      };
    default: {
      return state;
    }
  }
};

export default reducer;
