import React from 'react';
import Slider from 'react-slick';
import './Banner.css'
const Banner = () => {


    const settings = {
        // dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1

    };
    return (
        <>
            <div className="home-banner-container">
                <div className=" container-fluid home-banner">
                    <div className="custom-font-home container w-50">
                        <Slider {...settings} className="slider">
                            <div className="p-1">
                                <h5 className="p-1">A picture is worth a thousand words</h5>
                                <p className=""> It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
                            </div>
                            <div className="p-1">
                                <h5 className="p-1">A picture is worth a thousand words</h5>
                                <p className=""> It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
                            </div>
                        </Slider>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;