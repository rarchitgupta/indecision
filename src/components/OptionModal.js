import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Option Selected"
      ariaHideApp={false}
      onRequestClose={props.handleModalClose}
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal-title">Selected Option</h3>
      {props.selectedOption ? (
        <p className="modal-body">{props.selectedOption}</p>
      ) : undefined}
      <button onClick={props.handleModalClose} className="button">
        Okay
      </button>
    </Modal>
  );
};

export default OptionModal;
