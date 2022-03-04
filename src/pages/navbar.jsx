import { React, useState } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../public/assets/images/logo.png';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <header>
                <nav id='cssmenu' className="container">
                    <div className="logo"><a href=""><img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="logo" /></a></div>
                    <div id="head-mobile"></div>
                    <div className="button"></div>
                    <ul className="hdr-menu">
                        <li class='active'>
                            <Link to="/home">
                                HOME
                            </Link>

                        </li>
                        <li>
                            <Link className='text-white' to="/mint">
                                BUY/MINT
                            </Link>
                        </li>
                        <li>
                            <Link className='text-white' to="/roadmap">
                                ROADMAP
                            </Link>
                        </li>
                        <li>
                            <Link className='text-white' to="/gallery">
                                GALLERY
                            </Link>
                        </li>
                        <li><button type="button" className="connect-btn" onClick={handleShow} >CONNECT WALLET</button></li>
                        <li>
                            <Link className='text-white connect-btn' to="/login">
                                <FontAwesomeIcon icon={faUser} />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <div className="connect-wallet">
                <Modal show={show} className="con-modal" onHide={handleClose}>
                    <Modal.Header closeButton>
                        <h6 className="modal-title" id="exampleModalLongTitle">Select A Wallet To Connect To Metaverse </h6>
                        <button type="button" className="close" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="method-1 d-flex align-items-center pb-3">
                            <img src="./assets/images/metamask.png" alt="icon" />
                            <h6 className='mb-0 pl-3  fw-300'> <a href="#">MetaMask</a> </h6>
                        </div>
                        <div className="method-1 d-flex align-items-center pb-3">
                            <img src="./assets/images/ledger.jpg" alt="icon" style={{borderRadius:"5px"}} />
                            <h6 className='mb-0 pl-3  fw-300'><a href="#">Ledger</a> </h6>
                        </div>
                        <div className="method-1 d-flex align-items-center pb-3">
                            <img src="./assets/images/trezor.jpg" alt="icon" style={{borderRadius:"5px"}} />
                            <h6 className='mb-0 pl-3  fw-300'><a href="#">Trezor</a> </h6>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>

            {/* <div className="connect-wallet">
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Select A Wallet To Connect To Metaverse </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="method-1">
                                    <img src="./assets/images/metamask.png" alt="icon" />
                                    <h6> <a href="#">MetaMask</a> </h6>
                                </div>
                                <div className="method-1">
                                    <img src="images/ledger.jpg" alt="icon" />
                                    <h6><a href="#">Ledger</a> </h6>
                                </div>
                                <div className="method-1">
                                    <img src="images/trezor.jpg" alt="icon" />
                                    <h6><a href="#">Trezor</a> </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
export default Navbar;
