import axios from 'axios';
import API_CONST from './const';
/**
 * Получение списка посылок.
 */
export async function getAllOrdersApi(page) {
  const allOrders = await axios.get(
    `http://localhost:4000/orders?page=${page}&limit=${API_CONST.LIMIT_ORDER_FOR_VIEW}`
  );

  return allOrders;
}

/**
 * Добавление новой посылки.
 */
export async function addOrderApi(values) {
  const data = await axios.post('http://localhost:4000/orders/create', values);

  return data;
}

/**
 * Редактирование посылки.
 * @param {values} Данные посылки.
 */
export async function updateOrderApi(values) {
  const { _id } = values;

  const data = await axios.put(`http://localhost:4000/orders/update/${_id}`, values);

  return data;
}

/**
 * Удаление посылки.
 * @param {id} Id посылки.
 */
export async function deleteOrderApi(id) {
  const data = await axios.delete(`http://localhost:4000/orders/delete/${id}`);

  return data;
}