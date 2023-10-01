import React, { useState } from 'react'
import Modal from './Modal';

export default function Footer() {

  const [modal, setModal] = useState(false);

  const toggle = ()=> {
    setModal(!modal);
  }
  
  return (
    <>
    <footer className="footer">
          <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Musaib Bahsir</a>.
      </div>
      <button onClick={toggle} className="rules">Rules</button>
    </footer>

    {modal ? <Modal toggle={toggle} /> : null}
    </>
  )
}
