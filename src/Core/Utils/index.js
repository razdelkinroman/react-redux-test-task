export const tokenInCache = () => {
  const cacheToken = localStorage.getItem('cacheToken');

  return cacheToken !== null;
};
