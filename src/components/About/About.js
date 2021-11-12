import React from 'react';
import image from "../../images/about-img.png"
import './About.css'
const About = () => {
    return (
        <>
            <div className="container pt-5" id="gallery">
                <div className="row d-flex mt-5 pt-5">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
                        <div className="text-center mb-5">
                            <img className="p-3 gallery-img1" src={image} alt="" />
                            <img className="p-3 gallery-img2" src={image} alt="" />
                            <img className="p-3 gallery-img3" src={image} alt="" />

                        </div>

                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 text-center about-us mb-2">
                        <h3 className="mt-5 mt-sm-5 mt-md-5 mt-lg-5 mt-xl-0 mt-xxl-0">About Us</h3>
                        <p className="mt-5">
                            Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;