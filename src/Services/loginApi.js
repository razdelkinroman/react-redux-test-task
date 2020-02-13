import Service from 'Services';

/**
 * Получение токена.
 * @param {login} Данные формы входа пользователя.
 */
export async function getTokenApi(login) {
  const userData = await Service('post', '/login', login);
  return userData;
}

/**
 * Получение данных профиля пользователя.
 */
export async function getUserProfileApi() {
  const userData = await Service('get', '/users/2');
  return userData;
}
