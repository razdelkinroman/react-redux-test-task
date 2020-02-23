import React from 'react';
import ModalWindow from 'Components/Modal';
import { PrimaryButton } from 'Components/Buttons';

const DeleteModalWindow = ({ open, close, handleDelete }) => (
  <ModalWindow title="Вы уверены что хотите удалить заказ?" open={open} close={close}>
    <PrimaryButton name="Подтвердить" onClick={handleDelete} />
    <PrimaryButton name="Отмена" onClick={close} />
  </ModalWindow>
);

export default DeleteModalWindow;
