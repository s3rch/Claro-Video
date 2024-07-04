import axios from 'axios';

// CV api
const CV_URL = {
  data: 'https://mfwkweb-api.clarovideo.net',
};

const token = null;
const userLanguage = null;

// Set headers
const buildHeadersDefault = () => {
  let headers = {};
  if (token) {
    headers = {
      ...headers,
      'Accept-Language': userLanguage,
      Authorization: `Bearer ${token}`,
    };
  }
  return headers;
};

const createInstance = (type: keyof typeof CV_URL) => {
  const instance = axios.create({
    baseURL: CV_URL[type],
    timeout: 10000,
    headers: buildHeadersDefault(),
  });
  return instance;
};

export {
  createInstance,
};
