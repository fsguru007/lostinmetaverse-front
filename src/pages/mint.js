import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ConnectModal } from '../components/connectModal';
import { Footer } from '../components/footer'
import { useNftStats } from '../web3s/hooks/useNftStats';
import useActiveWeb3React from '../web3s/hooks/useWeb3';
import { trimAddress } from '../web3s/utils';

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

    const {account, deactivate} = useActiveWeb3React();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const disconnect = async () => {
        await deactivate();
    }

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

    const stats = useNftStats(account);

    const [mintAmount, setMintAmount] = useState(3);

    return (
        <div>
            <section id="login-reg">
                <div className="overlay pb-120">
                    <div className="container">
                        <div className="top-area mb-5">
                            <div className="d-flex align-items-center justify-content-between">
                                <Link to="/">
                                    <a className="back-home" href="">
                                        <img src="./assets/images/left-icon.png" alt="image" />
                                        Back To Home
                                    </a>
                                </Link>
                                {/* <a id="joerichards_connect_wallet" href="#" className="joerichards_show_on_desktop cmn-btn mr-2">Installing...</a> */}
                                {
                                    account?
                                    <a className="cmn-btn d-inline-block text-center ml-3" onClick={disconnect} >
                                        <strong>Disconnect</strong><br/><small>({trimAddress(account)})</small>
                                    </a>
                                    :
                                    <a className="cmn-btn d-inline-block text-center ml-3" onClick={()=>setShow(true)}>Connect Wallet</a>
                                }
                            </div>
                        </div>
                        {timeLeft > 0 && <h3 className='text-center text-white mt-5 pt-5' >
                            Minting will start in<br/>
                            {formatLeftTime(timeLeft)}
                        </h3>}

                        <div className="connect-wallet">
                            <ConnectModal show={show} handleClose={handleClose} />
                        </div>

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
                                                <input id="mint_amount" className='mint-input' min={1} max={33-stats.balance} placeholder="Amount" type="number" value={mintAmount}
                                                    onChange={(e)=>setMintAmount(e.target.value)}
                                                 />
                                            </div>
                                            <div className="form-group recover pt-4">
                                                <p className='d-flex justify-content-between mx-auto' style={{ textAlign: 'center' }}>Price ----------- {stats.price} ETH</p>
                                                {/* <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Total --------- <span id="joerichards_total_amount">0.102</span> ETH</p> */}
                                                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Total NFTs ------- <span id="joerichards_total_amount">{mintAmount}</span></p>
                                                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Total Cost --- <span id="joerichards_total_amount">{stats.price*mintAmount} ETH</span> </p>
                                            </div>
                                            <div className="form-group pt-4">
                                                <button id="joerichards_mint_button" type="submit" className="cmn-btn">Mint</button>
                                            </div>
                                        </form>
                                        {/* <div className="or">
                                            <p>OR</p>
                                        </div>
                                        <div className="sign-in">
                                            <p>Mint with Credit Card</p>
                                        </div> */}
                                        {/* <div className="reg-with">
                                            <div className="social-area d-flex justify-content-center">
                                                <a className="master checkout-button" href="#"><img src="./assets/images/mc_symbol.svg" alt="image" /></a>
                                                <a className="visa checkout-button" href="#"><img src="./assets/images/Visa_Brandmark_White_RGB_2021.png" alt="image" /></a>
                                                <a className="amex checkout-button" href="#"><img src="./assets/images/amex.png" alt="image" /></a>
                                            </div>
                                        </div> */}
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
                    <h2 className='mb-4' >
                    Free Royalty NFT Minting Conditions:
                    </h2>
                    <p>
                    #1- Wallet Currently Holds At Least 3 NFTs from L.I.T.M. Collection <br/>
                    #2- Wallet Holds NFTs Containing All 3 Types of ApeDad 2662: OG, 3D &amp; Pixelated 
                    </p>
                    <div className='row' >
                        <div className='col col-4 text-center' >
                            <h5>O.G.</h5>
                            <img className='w-100' src='/assets/images/char-og.jpg' alt="" />
                        </div>
                        <div className='col col-4 text-center' >
                            <h5>3D</h5>
                            <img className='w-100' src='/assets/images/char-3d.jpg' alt="" />
                        </div>
                        <div className='col col-4 text-center' >
                            <h5>Pixelated</h5>
                            <img className='w-100' src='/assets/images/char-px.jpg' alt="" />
                        </div>
                    </div>
                    <div className='mt-5' >
                        <h3>Additional Terms &amp; Conditions:</h3>
                        <p>An 11% Creator Royalty Is Applied to All Secondary Sales </p>
                        <p>Creator Royalties Are SHARED EQUALLY Between All Existing Royalty NFTs</p>
                        <p>Max Supply of 101 Royalty NFTs</p>
                        <p>Only One Royalty NFT Max Per Wallet</p>
                        <p>L.I.T.M. NFTs Can Only Be Used Once to Mint Royalty NFT</p>
                        <p>-No Staking Required-<br/>
                        NFTs from Main Collection May Be Sold<br/>
                        Immediately After Minting Royalty NFT
                        </p>
                        <p>
                        Royalty NFTs are Permanently Frozen to Minting Wallet<br/>
                        Royalty NFTs Cannot Be Sold or Transferred
                        </p>
                        <p>
                        Royalty NFTs are a Free Reward For Top Collectors<br/>
                        &amp; Entitle The Minting Wallet To Lifetime Passive Income 
                        </p>
                        <p>
                        Holders of Royalty NFTs May Claim Their Share of Royalties At Any Time
                        </p>
                        <p></p><br/>
                        <p><strong>Comming Soon!</strong></p>
                        <h4>MERGED CLAIM FEATURE</h4>
                        <p>
                        This feature will allow 11 wallets holding Royalty NFTs 
                        to Pool Claims together in a single automated transaction
                        and save over 90% on gas fees to claim royalty shares. 
                        </p>
                    </div>
                    <div className='mb-5 mt-4'>
                        <button id="royalty_mint_button" className="cmn-btn">CLAIM YOUR FREE ROYALTY NFT</button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Mint