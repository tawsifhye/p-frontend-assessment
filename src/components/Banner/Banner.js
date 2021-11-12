import React from 'react';
import Slider from 'react-slick';
import Header from '../Header/Header';
import './Banner.css'
const Banner = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1

    };
    return (
        <>
            <div className="home-banner-container mb-5">
                <div className=" container-fluid home-banner">
                    <Header></Header>
                    <div className="container w-50">
                        <h5 className="p-1">A picture is worth a thousand words</h5>
                        <Slider {...settings} className="slider">
                            <div className="p-1">
                                <p className="pt-1"> It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
                                <a href="#gallery" className="banner-btn">View Gallery</a>
                            </div>
                            <div className="p-1">
                                <p className="pt-1"> It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
                                <a href="#gallery" className="banner-btn">View Gallery</a>
                            </div>
                        </Slider>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;