/* eslint-disable */
import api from "../../../utils/api";


const getAllUsers = async (data) => {
  const response = await api.get(`/get_users?validity=${data}`);
  return response.data.Data;
};

const validateUser = async (data) => {
  const response = await api.get(`/validate_user?userid=${data}`);
  return response.data;
};


const deleteUser = async (data) => {
  const response = await api.get(`/delete_user?userid=${data}`);
  return response.data;
};

const userService = {
  deleteUser,
  validateUser,
  getAllUsers,
};

export default userService;
