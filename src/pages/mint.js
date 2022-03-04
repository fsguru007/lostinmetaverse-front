import React from 'react'
import { Link } from 'react-router-dom'

const Mint = () => {
    return (
        <div>
            <section id="login-reg">
                <div className="overlay pb-120">
                    <div className="container">
                        <div className="top-area">
                            <div className="row d-flex align-items-center">
                                <div className="col-sm-5 col">
                                    <Link to="/">
                                    <a className="back-home" href="">
                                        <img src="./assets/images/left-icon.png" alt="image" />
                                        Back To Home
                                    </a>
                                    </Link>
                                </div>
                                <div className="col-sm-5 col">
                                    <a id="joerichards_connect_wallet" href="#" className="joerichards_show_on_desktop cmn-btn">Installing...</a>
                                    <a id="joerichards_mobile_connect_wallet" href="#" className="joerichards_hide_on_desktop cmn-btn">Connect Wallet</a>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-120 d-flex justify-content-center">
                            <div className="col-lg-6">
                                <div className="login-reg-main text-center">
                                    <h4>Mint your RMRs</h4>
                                    <div className="form-area">
                                        <form action="#">
                                            <div className="form-group">
                                                <label style={{ float: 'left' }}>Select amount</label>
                                                <label style={{ float: 'right' }}>max 33</label>
                                            </div>
                                            <div style={{ clear: 'both' }} />
                                            <div className="form-group">
                                                <input id="joerichards_mint_amount" style={{ textAlign: 'center', maxWidth: '150px' }} placeholder="Amount" type="text" defaultValue={2} />
                                            </div>
                                            <div className="form-group recover pt-4">
                                                <p style={{ textAlign: 'center' }}>Price ------ 0.051 ETH</p>
                                                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Total ------ <span id="joerichards_total_amount">0.102</span> ETH</p>
                                            </div>
                                            <div className="form-group pt-4">
                                                <button id="joerichards_mint_button" type="submit" className="cmn-btn">Mint 2 get 1 FREE</button>
                                            </div>
                                        </form>
                                        <div className="or">
                                            <p>OR</p>
                                        </div>
                                        <div className="sign-in">
                                            <p>Mint with Credit Card</p>
                                        </div>
                                        <div className="reg-with">
                                            <div className="social-area d-flex justify-content-center">
                                                <a className="master checkout-button" href="#"><img src="./assets/images/mc_symbol.svg" alt="image" /></a>
                                                <a className="visa checkout-button" href="#"><img src="./assets/images/Visa_Brandmark_White_RGB_2021.png" alt="image" /></a>
                                                <a className="amex checkout-button" href="#"><img src="./assets/images/amex.png" alt="image" /></a>
                                            </div>
                                        </div>
                                        <div className="account">
                                            <p id="txStatus" style={{ fontSize: '14px' }}>PS: Gas fee is cheaper if you mint many at once!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Mint