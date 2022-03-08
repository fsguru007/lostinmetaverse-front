import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/footer'

const STARTTIME = new Date('2022-03-22T00:00:00').getTime();

const formatLeftTime = ts => {
    const days = Math.floor(ts / 86400);
    const hours = Math.floor((ts % 86400) / 3600);
    const minutes = Math.floor((ts % 3600) / 60);
    const seconds = ts % 60;

    return `${days} : ${hours<10?'0':''}${hours} : ${minutes<10?'0':''}${minutes} : ${seconds<10?'0':''}${seconds}`;
}

const Mint = () => {

    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const timer = setInterval(
            () => {
                const now = new Date().getTime();
                if (now < STARTTIME) {
                    setTimeLeft(Math.floor((STARTTIME - now) / 1000));
                }
            }, 1000
        );

        return ()=>clearInterval(timer);
    }, []);

    return (
        <div>
            <section id="login-reg">
                <div className="overlay pb-120">
                    <div className="container">
                        <div className="top-area mb-5">
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
                                    <a id="joerichards_connect_wallet" href="#" className="joerichards_show_on_desktop cmn-btn mr-2">Installing...</a>
                                    <a id="joerichards_mobile_connect_wallet" href="#" className="joerichards_hide_on_desktop cmn-btn">Connect Wallet</a>
                                </div>
                            </div>
                        </div>
                        {timeLeft > 0 && <h3 className='text-center text-white mt-5 pt-5' >
                            Minting will start in<br/>
                            {formatLeftTime(timeLeft)}
                        </h3>}

                        <div className="row pt-5 d-flex justify-content-center">
                            <div className="col-lg-6">
                                <div className="login-reg-main text-center">
                                    <h4>Mint your NFT</h4>
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
                                                <p style={{ textAlign: 'center' }}>Price ----------- 0.11 ETH</p>
                                                {/* <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Total --------- <span id="joerichards_total_amount">0.102</span> ETH</p> */}
                                                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Total NFTs ------- <span id="joerichards_total_amount">3</span> ETH</p>
                                                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Total Cost --- <span id="joerichards_total_amount">0.22</span> ETH</p>
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

            <section className='text-white text-center mb-6 mx-auto' style={{maxWidth:'800px'}} >
                <div className='container'>
                    <div className='mb-4'>
                        <button id="royalty_mint_button" className="cmn-btn">CLAIM YOUR FREE ROYALTY NFT</button>
                    </div>
                    <h2 className='mb-4' >
                    Free Royalty NFT Minting Conditions:
                    </h2>
                    <p>
                        #1 Wallet Holds 3 OR More NFTs from LITM Collection* <br/>
                        #2 Wallet HOLDS NFTs From Collection Containing All 3 Characters* 
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Mint