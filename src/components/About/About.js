import React from 'react';
import image from "../../images/about-img.png"
import './About.css'
const About = () => {
    return (
        <>
            <div class="container pt-5">
                <div class="row d-flex ">
                    <div class="col-6">

                        <img className="p-3 gallery-img1" src={image} alt="" />


                        <img className="p-3" src={image} alt="" />


                        <img className="p-3 gallery-img3" src={image} alt="" />

                    </div>
                    <div class="col-6 text-center about-us">
                        <h3>About Us</h3>
                        <p className="mt-5">
                            Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;