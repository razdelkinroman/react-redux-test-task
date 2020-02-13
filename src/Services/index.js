import axios from 'axios';

function Service(httpMethod, path, payload, headers) {
  const cacheToken = localStorage.getItem('cacheToken');
  const headerAuth = cacheToken && { Authorization: `Bearer ${cacheToken}` };
  const url = 'https://reqres.in/api';
  const cancel = axios.CancelToken.source();

  const service = axios.create({
    headers: {
      ...headers,
      ...headerAuth
    },
    cancelToken: cancel.token
  });

  const handleSuccess = response => response;

  service.interceptors.response.use(handleSuccess);

  switch (httpMethod) {
    case 'get':
      return service.get(`${url}${path}`);
    case 'post':
      return service.request({
        method: 'POST',
        url: `${url}${path}`,
        data: payload
      });
    default:
      break;
  }
}

export default Service;
