import React from 'react'
import { Helmet } from "react-helmet";
import { Footer } from '../components/footer';
import Navbar from '../components/navbar'

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Gallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

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
                <section className="hand-made" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className="heading-txt text-center mb-5"><h1>Gallery</h1></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="">
                                    <h3>100% unique, 100% hand-made!</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <Slider {...settings} >
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
                        </Slider>
                    </div>
                </section>
                {/* footer  */}
                <Footer />
            </div>

            <Helmet>
                <script src="./slider.js"></script>
            </Helmet>
        </div>
    )
}

export default Gallery

