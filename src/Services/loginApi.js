import Service from 'Services';

/**
 * Получение токена.
 * @param {login} Данные формы входа пользователя.
 */
export async function getTokenApi(login) {
  const token = await Service('post', '/login', login);
  return token;
}

/**
 * Получение данных профиля пользователя.
 */
export async function getUserProfileApi() {
  const userData = await Service('get', '/users/2');
  return userData;
}
