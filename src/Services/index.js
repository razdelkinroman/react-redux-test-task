import axios from 'axios';

function Service(httpMethod, path, payload, headers) {
  const cacheToken = localStorage.getItem('cacheToken');
  const headerAuth = cacheToken && { Authorization: `Bearer ${cacheToken}` };
  const url = 'http://localhost:4000';
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
    case 'put':
      return service.request({
        method: 'PUT',
        url: `${url}${path}`,
        data: payload
      });
    case 'delete':
      return service.request({
        method: 'DELETE',
        url: `${url}${path}`
      });
    default:
      break;
  }
}

export default Service;
