import React from 'react';
import { connect } from 'react-redux';
import ModalWindow from 'Components/Modal';
import Form from 'Components/Form';

import { addOrder, updateOrder, cleanEditForm } from 'Actions/orders/actions';

const FormContainer = props => {
  return (
    <ModalWindow title="Редактирование заказа" open={props.open} close={props.closeModal}>
      <Form
        addOrder={props.addOrder}
        closeModal={props.closeModal}
        editableOrder={props.editableOrder}
        updateOrder={props.updateOrder}
        distance={props.distance}
      />
    </ModalWindow>
  );
};

const mapStateToProps = ({ orders }) => {
  return {
    editableOrder: orders.editableOrder,
    distance: orders.distance
  };
};

export default connect(mapStateToProps, { addOrder, updateOrder, cleanEditForm })(FormContainer);
