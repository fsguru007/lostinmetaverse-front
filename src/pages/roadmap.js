import React from 'react'
import { Link } from 'react-router-dom'
import { SocialIcons } from '../components/social'
import Navbar from './navbar'

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
                                Mint Now<i className="fa fa-long-arrow-right"></i>
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
                                        <p>BlockVision Creative</p>
                                        <a href="#">All Collectors Will Get Pre-Sale Early
                                            Access to Pre-Sale Minting of Future
                                            Projects By BlockVision Creative</a>
                                        <p>September 2023</p>
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
                                        <a href="#">Free 5 Star Dinner and Cocktail
                                            Mixer Events for All Lost In The
                                            Metaverse NFTs Holders with Free
                                            VIP Packages including
                                            Accommodations for Top Collectors</a>
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
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="f-logo">
                                    <a href="index.html"><img src="./assets/images/logo.png" alt="logo" /></a>
                                </div>
                                <div className="about">
                                    <h4>About</h4>
                                    <p>Lost Im The Metaverse is a Visionary
                                        Sci-Fi Collective On Ethereum Allegorithmically Generated By Randomly Programmed Humans.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="copy-right">
                    <div className="container">
                        <p>©2022. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap