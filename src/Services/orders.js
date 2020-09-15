import axios from 'axios';

/**
 * Получение списка посылок.
 */
export async function getAllOrdersApi() {
  const allOrders = await axios.get('http://localhost:4000/orders');

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
