import React, { useState } from 'react'
import { ToastContainer } from 'react-bootstrap';
import Slider from 'react-slick';
import { toast } from 'react-toastify';
import { Footer } from '../components/footer'
import { LoadingAnim } from '../components/loading';
import Navbar from '../components/navbar'
import { useRoyaltyContract } from '../web3s/hooks/useContracts';
import { useNftStats } from '../web3s/hooks/useNftStats';
import useActiveWeb3React from '../web3s/hooks/useWeb3';
import { claimReward } from '../web3s/utils/nft';

const BASEURL = 'https://lostinthemetaverse.io/maincollectionnfts-lostinthemetaverse-io/cgi-bin/Assets/Main%20Collection%20NFT%20Images%201-1111/';
const RBASEURL = 'https://lostinthemetaverse.io/maincollectionnfts-lostinthemetaverse-io/cgi-bin/Assets/Main%20Collection%20NFT%20Images%201-1111/';

const Login = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    const [updater, setUpdater] = useState(1);

    const {account, chainId, library} = useActiveWeb3React();

    const stats = useNftStats(account, chainId + updater);

    const [claiming, setClaiming] = useState(false);

    const royaltyContract = useRoyaltyContract(library);

    const claim = async () => {
        setClaiming(true);
        const res = await claimReward(royaltyContract);
        if (res) {
            setUpdater(updater + 1);
            toast.success('Claimed Successfully!');
        } else {
            toast.error('Claiming Failed!');
        }
        setClaiming(false);
    }

    return (
        <div>
            <Navbar />
            <div>
                {/* popup button End */}
                <section className="login-sec-cont">
                    <div className="container bg-background">
                        <div className="container sec-1">
                            <div className="col-md-12">
                                <div className="login-head">
                                    <h3>Your ApeDad 2662: Lost In The Metaverse NFTs:</h3>
                                </div>
                                {stats.wallet.length? <Slider className='hand-made mt-6' {...sliderSettings} >
                                    {stats.wallet.map(id => <div key={`token-${id}`} className="log-img p-2 m-0">
                                        <img src={`${BASEURL}${id}.png`} alt="img" />
                                    </div>)}
                                </Slider> : <p className='text-center' >You have no NFTs</p>}
                                
                            </div>
                        </div>
                        <div className="container sec-1">
                            <div className="col-md-12">
                                <div className="login-head">
                                    <h3>Your Royalty NFT:</h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-5 log-img">
                                        {stats.royaltyToken?
                                        <img src={`${RBASEURL}${stats.royaltyToken}.png`} alt="img" />:
                                        <p className='text-center'>You have no royalty NFT</p> }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container sec-1">
                            <div className="col-md-12">
                                <div className="login-head">
                                    <h3>Your Accumulated Royalty Share:</h3>
                                    <h5>Claim Your ETH</h5>
                                    <h6>ETH to claim on Ethereum: {stats.pendingReward.toFixed(4)}</h6>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <button style={{minWidth:200}} disabled={!stats.royaltyToken || claiming || stats.pendingReward===0} id="joerichards_mint_button" className="cmn-btn" onClick={claim} >
                                            {claiming?<><LoadingAnim size={20} /> Please wait...</>:'Claim'}
                                        </button>
                                        <br />
                                        <i>Your Accumulated Royalty Share = {stats.pendingReward.toFixed(4)} ETH </i>
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

                <ToastContainer theme='dark' />
                
                <Footer />
            </div>
        </div>
    )
}

export default Login