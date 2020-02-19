import React from 'react';
import ModalWindow from 'Components/Modal';
import { PrimaryButton } from 'Components/Buttons';

const DeleteModalWindow = ({ open, close, handleDelete }) => (
  <ModalWindow title="Вы уверены что хотите удалить заказ?" open={open} close={close}>
    <PrimaryButton onClick={handleDelete}>Подтвердить</PrimaryButton>
    <PrimaryButton onClick={close}>Отмена</PrimaryButton>
  </ModalWindow>
);

export default DeleteModalWindow;
