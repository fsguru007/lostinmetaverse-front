import React from 'react'
import { Link } from 'react-router-dom'
import { SocialIcons } from '../components/social'
import Navbar from '../components/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Footer } from '../components/footer';

const Roadmap = () => {
    return (
        <div>
            <div>
                <Navbar/>
                {/* Header End */}
                {/* popup button  */}
                {/* Button trigger modal */}
                {/* Modal */}
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
                                        <img src="images/metamask.png" alt="icon" />
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
                </div>
                {/* popup button End */}
                <section className="main-heading">
                    <div className="container">
                        <div className="heading-txt">
                            <h2>A Visionary Sci-Fi
                                <br />
                                NFT Collectible
                            </h2>
                            <Link to='/mint' className="connect-btn connect-btn-2">
                                Mint Now <FontAwesomeIcon icon={faLongArrowRight} />
                            </Link>
                        </div>
                        <SocialIcons />
                    </div>
                </section>
                <section className="roadmap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="roadmap-heading">
                                    <h3>Roadmap of Lost in <br />
                                        the Metaverse</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="roadmap-pattern">
                            <div className="row">
                                <div className="col-md-5" />
                                <div className="col-md-2" />
                                <div className="col-md-5">
                                    <div className="pattern-card">
                                        <a href="#">Merge Claim (Automated Group
                                            Transactions for Royalty Claims)</a>
                                        <p>July 2022</p>
                                        <ul>
                                            <li>Special Feature Coming Soon for Top Collectors</li>
                                            <li>Save Over 90% on Gas Fees to Claim Royalties</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="roadmap-pattern">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="patter-card-2">
                                        <p>VIP PRESALE ACCESS</p>
                                        <a href="#">All Collectors Will Get Early Access to Minting of Future Projects By BlockVision Creative</a>
                                        <p>September 2022</p>
                                    </div>
                                </div>
                                <div className="col-md-2" />
                                <div className="col-md-5">
                                </div>
                            </div>
                        </div>
                        <div className="roadmap-pattern">
                            <div className="row">
                                <div className="col-md-5" />
                                <div className="col-md-2" />
                                <div className="col-md-5">
                                    <div className="pattern-card">
                                        <a href="#">Live Dinner &amp; Cocktail Mixer Events For All ApeDad 2662: Lost In The Metaverse Collectors</a>
                                        <p>Summer 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="roadmap-pattern">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="patter-card-2">
                                        <a href="#">Voting Mechanism For Top
                                            Collectors with Royalty NFTs</a>
                                        <p>Summer 2023</p>
                                    </div>
                                </div>
                                <div className="col-md-2" />
                                <div className="col-md-5">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* footer  */}
               
                <Footer />
            </div>
        </div>
    )
}

export default Roadmap