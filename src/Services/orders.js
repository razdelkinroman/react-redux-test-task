import API_CONST from './const';
import Service from 'Services';

/**
 * Получение списка посылок.
 */
export async function getAllOrdersApi(page) {
  const allOrders = await Service(
    'get',
    `/orders?page=${page}&limit=${API_CONST.LIMIT_ORDER_FOR_VIEW}`
  );

  return allOrders;
}

/**
 * Добавление новой посылки.
 */
export async function addOrderApi(values) {
  const data = await Service('post', '/orders/create', values);

  return data;
}

/**
 * Редактирование посылки.
 * @param {values} Данные посылки.
 */
export async function updateOrderApi(values) {
  const { _id } = values;
  const data = await Service('put', `/orders/update/${_id}`, values);

  return data;
}

/**
 * Удаление посылки.
 * @param {id} Id посылки.
 */
export async function deleteOrderApi(id) {
  const data = await Service('delete', `/orders/delete/${id}`);

  return data;
}
