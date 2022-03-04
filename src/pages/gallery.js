import React from 'react'
import {Helmet} from "react-helmet";
import Navbar from '../components/navbar'

const Gallery = () => {


    return (
        <div>
            <div>
                <Navbar />

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
                <section className="some-art-work" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="heading-txt"><h3>Gallery</h3></div>
                            </div>
                            {/* gallery slider  */}
                            <div className="container-2">
                                <div className="carousel">
                                    <div className="item a"><img src="./assets/images/1.jpg" alt="image" /></div>
                                    <div className="item b"><img src="./assets/images/2.jpg" alt="image" /></div>
                                    <div className="item c"><img src="./assets/images/3.jpg" alt="image" /></div>
                                    <div className="item d"><img src="./assets/images/4.jpg" alt="image" /></div>
                                    <div className="item e"><img src="./assets/images/5.jpg" alt="image" /></div>
                                    <div className="item f"><img src="./assets/images/6.jpg" alt="image" /></div>
                                </div>
                            </div>
                            <div className="next">Next</div>
                            <div className="prev">Prev</div>
                            {/* gallery slider End */}
                        </div>
                    </div>
                </section>
                <section className="hand-made" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="some-art-heading">
                                    <h3>100% unique, 100% hand-made!</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="unique-slider">
                            <div className="item">
                                <div className="s-card">
                                    <div className="s-img">
                                        <img src="./assets/images/slider-img1.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="s-card">
                                    <div className="s-img">
                                        <img src="./assets/images/slider-img2.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="s-card">
                                    <div className="s-img">
                                        <img src="./assets/images/slider-img3.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="s-card">
                                    <div className="s-img">
                                        <img src="./assets/images/slider-img4.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="s-card">
                                    <div className="s-img">
                                        <img src="./assets/images/slider-img5.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="s-card">
                                    <div className="s-img">
                                        <img src="./assets/images/slider-img3.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="s-card">
                                    <div className="s-img">
                                        <img src="./assets/images/slider-img1.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="s-card">
                                    <div className="s-img">
                                        <img src="./assets/images/slider-img5.png" alt="img" />
                                    </div>
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

            <Helmet>
                <script src="./slider.js"></script>
            </Helmet>
        </div>
    )
}

export default Gallery

