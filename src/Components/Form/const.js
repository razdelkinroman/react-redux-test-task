export const initialState = {
  title: '',
  distance: '',
  type: 'express',
  price: ''
};

export const typesDelivery = [
  { value: 'express', name: 'Срочная доставка' },
  { value: 'ems', name: 'Почта России' },
  { value: 'postbox', name: 'Пункт выдачи' }
];

export const EXPRESS_TARIFF = 5;
export const STANDART_TARIFF = 3;
