import { React, useState } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../public/assets/images/logo.png';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ConnectModal } from './connectModal';
import useActiveWeb3React from '../web3s/hooks/useWeb3';
import { switchNetwork, trimAddress } from '../web3s/utils';
import { CHAIN_ID } from '../web3s/constants';
const Navbar = () => {

    const [show, setShow] = useState(false);

    const [showMenu, setShowMenu] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toggleMenu = ()=> {
        setShowMenu(!showMenu);
    }

    const {account, deactivate, chainId, library} = useActiveWeb3React();

    const disconnect = async () => {
        await deactivate();
    }

    return (
        <>
            <header>
                <nav id='cssmenu' className="container">
                    <div className="logo">
                        <Link to='/' >
                            <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="logo" />
                        </Link>
                    </div>
                    <div id="head-mobile"></div>
                    <div className="button" onClick={toggleMenu}></div>
                    <ul className={`hdr-menu ${showMenu?'d-block mt-5':''}`}>
                        <li class='active'>
                            <Link to="/">
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
                                ROADMAP/TEAM
                            </Link>
                        </li>
                        <li>
                            <Link className='text-white' to="/gallery">
                                GALLERY
                            </Link>
                        </li>
                        <li>{ account?(
                            chainId === CHAIN_ID?
                            <button type="button" className="connect-btn" onClick={disconnect} ><strong>Disconnect</strong><br/><small>({trimAddress(account)})</small></button>:
                            <button type="button" className="connect-btn" onClick={()=>switchNetwork(library)} >Switch Network</button>
                            ):
                            <button type="button" className="connect-btn" onClick={handleShow} >CONNECT WALLET</button> }
                        </li>
                        <li>
                            <Link className='text-white connect-btn ml-2' to="/login">
                                <FontAwesomeIcon icon={faUser} />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <div className="connect-wallet">
                <ConnectModal show={show} handleClose={handleClose} />
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
