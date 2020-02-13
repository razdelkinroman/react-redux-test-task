import * as Yup from 'yup';

export default function LoginFormSchema() {
  return Yup.object().shape({
    email: Yup.string()
      .email('Введите корректный адрес электронной почты.')
      .required('Введите адрес электронной почты'),
    password: Yup.string()
      .required('Введите пароль')
      .min(8, 'Пароль должен содержать больше 8 символов')
  });
}
