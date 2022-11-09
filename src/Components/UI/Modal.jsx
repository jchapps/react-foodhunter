import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

const portalLocation = document.getElementById('overlay')

function Modal(props) {
  return (
  <>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalLocation)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalLocation)}
  </>
  )
}

export default Modal;
