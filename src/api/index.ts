import axiosInstance, { RequestMethod } from './axiosInstance';
import API_URL from './urls';

const api = {
  getProducts: () => {
    return axiosInstance(RequestMethod.GET, API_URL.RPODUCTS);
  },
  getCoupons: () => {
    return axiosInstance(RequestMethod.GET, API_URL.COUPONS);
  },
  getUserProfile: () => {
    return axiosInstance(RequestMethod.GET, API_URL.USER_PROFILE);
  },
};

export default api;
