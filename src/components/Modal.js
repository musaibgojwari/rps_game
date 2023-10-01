import React from 'react'
import { createPortal } from 'react-dom'
import close from "../images/icon-close.svg"
import rules from "../images/image-rules.svg"

export default function Modal({toggle}) {
  return (
    createPortal(
      <div className="modal">
        <div className="modal__container">
        <div className="modal__header">
          <h1 className='rules'>Rules</h1>
          <button onClick={toggle}><img src={close} alt="close" /></button>
        </div>
        <div className="modal__body">
          <img src={rules}/>
        </div>
        </div>
      </div>,
      document.getElementById("modal")
    )
  )
}
