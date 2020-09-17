import API_CONST from '../../Services/const';

export const tokenInCache = () => {
  const cacheToken = localStorage.getItem('cacheToken');

  return cacheToken !== null;
};

// Переход на следующую страницу при добавлении заказа, если список заказов превышает лимит отображения
// и переход на предыдущую страницу при удалении заказа, если он был один на странице
export const checkPage = (page, orders) => {
  if (orders.length === API_CONST.LIMIT_ORDER_FOR_VIEW) {
    return Number(page) + 1;
  }

  if (orders.length === 1) {
    return Number(page) - 1;
  }

  return page;
};
