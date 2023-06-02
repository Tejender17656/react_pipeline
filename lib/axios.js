import axios from 'axios';
import Router from 'next/router'
import toast from 'react-hot-toast'
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: "https://uvdi-api.mobileprogramming.net/cpcoreapis/cpa/api/v1" // Dev Env
});

instance.constructor = axios.constructor;

instance.interceptors.response.use(response => {
  if (response.status === 403) {
    Router.push('/');
  }
  return response;
}, (err) => {
  if (err.response.status == 403) {
    Router.push('/');
    toast.dismiss();
    toast.error('Your Session expired. Please login again')
    if (typeof window !== "undefined" && Cookies.get('token')) {
      Cookies.remove('token');
    }
  }
  return Promise.reject(err);
});

export default instance;