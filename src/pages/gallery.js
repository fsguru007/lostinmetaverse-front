import React from 'react'
import { Helmet } from "react-helmet";
import { Footer } from '../components/footer';
import Navbar from '../components/navbar'

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const SLIDERS = Array(96).fill(0).map((_, id)=>(id+1));

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
                {/* popup button End */}
                <section className="hand-made" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className="heading-txt text-center mb-5"><h1>Gallery</h1></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="">
                                    {/* <h3>100% unique, 100% hand-made!</h3> */}
                                </div>
                            </div>
                            <div className="col-md-4">
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <Slider {...settings} >
                            {
                                SLIDERS.map((i, id) => <div className="item" key={`slider-${i}`} >
                                    <div className="s-card">
                                        <div className="s-img">
                                            <img src={`./assets/images/gallery/slider-img-${i}.jpg`} alt="img" />
                                        </div>
                                    </div>
                                </div>)
                            }
                        </Slider>
                    </div>
                </section>
                {/* footer  */}
                <Footer />
            </div>
        </div>
    )
}

export default Gallery

