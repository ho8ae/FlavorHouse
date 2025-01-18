import axios from 'axios';
import axiosInstance from '../api/axios';

function setHeader(key: string, value: string) {
  axiosInstance.defaults.headers.common[key] = value;
}

function removeHeader(key: string) {
  if (!axiosInstance.defaults.headers.common[key]) {
    return;
  }

  delete axios.defaults.headers.common[key];
}

export {setHeader, removeHeader};
