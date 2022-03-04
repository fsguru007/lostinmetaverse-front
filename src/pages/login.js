import React from 'react'
import { Footer } from '../components/footer'
import Navbar from '../components/navbar'

const Login = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className="connect-wallet">
                    <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Select A Wallet To Connect To Metaverse </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="method-1">
                                        <img src="./assets/images/metamask.png" alt="icon" />
                                        <h6> <a href="#">MetaMask</a> </h6>
                                    </div>
                                    <div className="method-1">
                                        <img src="./assets/images/ledger.jpg" alt="icon" />
                                        <h6><a href="#">Ledger</a> </h6>
                                    </div>
                                    <div className="method-1">
                                        <img src="./assets/images/trezor.jpg" alt="icon" />
                                        <h6><a href="#">Trezor</a> </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* popup button End */}
                <section className="login-sec-cont">
                    <div className="container bg-background">
                        <div className="container sec-1">
                            <div className="col-md-12">
                                <div className="login-head">
                                    <h3>Your ApeDad 2662: Lost In The Metaverse NFTs:</h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 log-img">
                                        <img src="./assets/images/login-img1.png" alt="img" />
                                    </div>
                                    <div className="col-md-3 log-img">
                                        <img src="./assets/images/login-img2.png" alt="img" />
                                    </div>
                                    <div className="col-md-3 log-img">
                                        <img src="./assets/images/login-img3.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container sec-1">
                            <div className="col-md-12">
                                <div className="login-head">
                                    <h3>Your Royalty NFTs:</h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 log-img">
                                        <img src="./assets/images/login-img4.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container sec-1">
                            <div className="col-md-12">
                                <div className="login-head">
                                    <h3>Your Accumulated Royalty Share:</h3>
                                    <h5>Claim Your ETH</h5>
                                    <h6>ETH to claim on Ethereum: <a href="#">0.00</a></h6>
                                    <h6>WETH to claim on Polygon: <a href="#">0.00</a></h6>
                                    <p>To claim WETH, please connect to Polygon network</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <a href="#" className="connect-btn connect-btn-2">CLAIM</a>
                                        <br />
                                        <i>Your Accumulated Royalty Share = 0.0000 ETH </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <div className="bg-line-shape buy-mint-shape">
    <img src="images/bg-line-shape.png" alt="shape">
  </div> */}
                {/* footer  */}
                
                <Footer />
            </div>
        </div>
    )
}

export default Login