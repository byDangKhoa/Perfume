import ReactDOM from 'react-dom'
import classes from './Modal.module.scss'
import { Fragment } from 'react'
const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}
const Backdrop = (props) => {
  return (
    <div
      onClick={props.onBackdropClose}
      className={`${classes.backdrop} ${props.className} `}></div>
  )
}
const Modal = (props) => {
  const root = document.getElementById('modal')
  return (
    <Fragment>
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, root)}
      {ReactDOM.createPortal(
        <Backdrop onBackdropClose={props.onModalClose}>
          {props.children}
        </Backdrop>,
        root
      )}
    </Fragment>
  )
}

export default Modal
