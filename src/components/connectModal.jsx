import React from "react";
import { Modal } from "react-bootstrap";
import { injected } from "../web3s/constants";
import useActiveWeb3React from "../web3s/hooks/useWeb3";

export const ConnectModal = (props) => {
  const {show, handleClose} = props;

  const {activate} = useActiveWeb3React();

  const connectMetamask = async () => {
    if (activate) {
      await activate(injected);
    }

    handleClose();
  }

  return <Modal show={show} className="con-modal" onHide={handleClose}>
    <Modal.Header closeButton>
      <h6 className="modal-title" id="exampleModalLongTitle">Select A Wallet To Connect To Metaverse </h6>
      <button type="button" className="close" onClick={handleClose}>
        <span aria-hidden="true">&times;</span>
      </button>
    </Modal.Header>
    <Modal.Body>

      <div className="method-1 d-flex align-items-center pb-3">
        <img src="./assets/images/metamask.png" alt="icon" />
        <h6 className='mb-0 pl-3  fw-300'> <a href="#" onClick={connectMetamask} >MetaMask</a> </h6>
      </div>
      <div className="method-1 d-flex align-items-center pb-3">
        <img src="./assets/images/ledger.jpg" alt="icon" style={{ borderRadius: "5px" }} />
        <h6 className='mb-0 pl-3  fw-300'><a href="#">Ledger</a> </h6>
      </div>
      <div className="method-1 d-flex align-items-center pb-3">
        <img src="./assets/images/trezor.jpg" alt="icon" style={{ borderRadius: "5px" }} />
        <h6 className='mb-0 pl-3  fw-300'><a href="#">Trezor</a> </h6>
      </div>
    </Modal.Body>
  </Modal>
}