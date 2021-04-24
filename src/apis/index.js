import axios from "axios";
const baseUrl = "https://reqres.in/api";

export const getUsers = () => {
  return api(`${baseUrl}/users`, "get");
};

export const createUser = (payload) => {
  return api(`${baseUrl}/users`, "post", {body:payload});
};

export const deleteUser = ({id}) => {
  return api(`${baseUrl}/users/${id}`, "delete");
};

const api = async (url, method,body) => {
  const options = {
    method,
    url,
    body
  };
  try {
    const response = await axios(options);
    return response;
  } catch (error) {
    console.log(error);
  }
};
