/* eslint-disable */

import api from "../../../utils/api";

// const login = async (req) => {
//   const { data } = await api.post(`/account/login`, req);
//   if (data?.succeeded) {
//     localStorage.setItem("user", JSON.stringify(data?.data));
//   } else {
//     throw data.message;
//   }
//   return data.data;
// };

// Static User Login
const login = async (userData) => {
  // debugger;
  const response = await api.post(`/login`, userData);
  if (response?.data) {
    localStorage.setItem(
      "competitionai_user",
      JSON.stringify({
        ...response?.data,
      })
    );
  } else {
    throw response?.data?.message;
  }
  return response?.data;
};

const signup = async (finalData) => {
  const response = await api.post(`/sign_up`, finalData);
  return response;
};


const register = async (req) => {
  const { data } = await api.post(`/account/register`, req);
  if (data?.succeeded) {
    return data.data;
  } else throw data.message;
};

// Logout user
const logout = () => {
  localStorage.removeItem("competitionai_user");
};

const authService = {
  logout,
  signup,
  login,
  register,
};

export default authService;
