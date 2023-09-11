/* eslint-disable */
import api from "../../../utils/api";


const checkQueries = async () => {
  // debugger;
  const response = await api.get(`/check_queries`);
  return response?.data;
};

const addQueries = async (req) => {
  // const response = await api.get(`/add_queries`);
  const response  = await api.put(`/add_query?number_of_queries=${req.number_of_queries}&vectorstore=${req?.vectorstore}&query=${req.query}`);
  return response?.data;
};

const getQueryHistory = async (userId) => {
  const response = await api.get(`/get_history_of_a_user?user_id=${userId}`);
  // const response  = await api.put(`/add_query?number_of_queries=${req.number_of_queries}&vectorstore=${req?.vectorstore}&query=${req.query}`);
  return response?.data;
};

const getQueryHistoryDetails = async (req) => {
  const response = await api.get(`/get_history_of_a_user_with_source_and_text?user_id=${req.user_id}&queryId=${req.query_id}`);
  // const response  = await api.put(`/add_query?number_of_queries=${req.number_of_queries}&vectorstore=${req?.vectorstore}&query=${req.query}`);
  return response?.data;
};

const userService = {
  checkQueries,
  addQueries,
  getQueryHistory,
  getQueryHistoryDetails
};

export default userService;
