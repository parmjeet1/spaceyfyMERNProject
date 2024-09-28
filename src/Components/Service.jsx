import React from 'react'
import { Link } from 'react-router-dom'

export default function Service() {
  return (
    <>
    
    <div className="inner-banner py-5">
        <section className="w3l-breadcrumb text-left py-sm-5 ">
            <div className="container">
                <div className="w3breadcrumb-gids">
                    <div className="w3breadcrumb-left text-left">
                        <h2 className="inner-w3-title mt-sm-5 mt-4">
                            Services </h2>

                    </div>
                    <div className="w3breadcrumb-right">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="index.html">Home</Link></li>
                            <li className="active"><span className="fas fa-angle-double-right mx-2"></span> Services </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    </div>
    <section className="w3l-passion-mid-sec py-5 pb-0">
        <div className="container py-md-5 py-3 pb-0">
            <div className="container">
                <div className="row w3l-passion-mid-grids">
                    <div className="col-lg-6 passion-grid-item-info pe-lg-5 mb-lg-0 mb-5">
                        <h6 className="title-subw3hny mb-1">Post Your Property</h6>
                        <h3 className="title-w3l mb-4">Property owners get free posting when they register</h3>
                        <p className="mt-3 pe-lg-5">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in
                            ligula. Semper at tempufddfel.Lorem ipsum dolor sit, amet consectetur elit. Earum mollitia
                            cum ex ipsam autem!earum sequi amet.</p>
                        <div className="w3banner-content-btns">
                            <a href="about.html" className="btn btn-style btn-primary mt-lg-5 mt-4 me-2">Services <i className="fas fa-angle-double-right ms-2"></i></a>
                            <a href="contact.html" className="btn btn-style btn-outline-dark mt-lg-5 mt-4">Contact Us <i className="fas fa-angle-double-right ms-2"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6 passion-grid-item-info">
                        <img src="assets/images/g6.jpg" alt="" className="img-fluid radius-image"/>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <section className="locations-1 w3services-3">
        <div className="locations py-5">
            <div className="container py-lg-5 py-md-4 py-2">
                <div className="heading text-center mx-auto">
                    <h6 className="title-subw3hny mb-1">Our Properties</h6>
                    <h3 className="title-w3l mb-3">Explore Our Properties</h3>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-6 mt-md-5 mt-4">
                        <div className="w3property-grid">
                            <a href="#property">
                                <div className="box16">
<img className="img-fluid" src="assets/images/d1.jpg" alt=""/>
                                    <div className="box-content text-center">
                                        <i className="fas fa-home"></i>
                                        <h3 className="title">House</h3>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mt-md-5 mt-4">
                        <div className="w3property-grid">
                            <a href="#property">
                                <div className="box16">

<img className="img-fluid" src="assets/images/d2.jpg" alt=""/>
                                    <div className="box-content text-center">
                                        <i className="far fa-building"></i>
                                        <h3 className="title">Appartment</h3>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mt-md-5 mt-4">
                        <div className="w3property-grid">
                            <a href="#property">
                                <div className="box16">

<img className="img-fluid" src="assets/images/d3.jpg" alt=""/>
                                    <div className="box-content text-center">
                                        <i className="fas fa-house-damage"></i>
                                        <h3 className="title">Villa</h3>

                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mt-md-5 mt-4">
                        <div className="w3property-grid">
                            <a href="#property">
                                <div className="box16">
                                    <img 
                                    className="img-fluid" 
                                    src="assets/images/d4.jpg" 
                                    alt=""/>
                                    <div className="box-content text-center">
                                        <i className="fas fa-hotel"></i>
                                        <h3 className="title">Town</h3>

                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>
    <section className="w3l-features py-5" id="work">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-content text-center mb-lg-3 mb-4">
                <h6 className="title-subw3hny mb-1">What We Do</h6>
                <h3 className="title-w3l">What We Offered</h3>
            </div>
            <div className="main-cont-wthree-2">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mt-lg-5 mt-4">
                        <div className="grids-1 box-wrap">
                            <div className="icon">
                                <i className="fas fa-thumbs-up"></i>
                            </div>
                            <h4><a href="#service" className="title-head mb-3">Guidance you need</a></h4>
                            <p className="text-para">Lorem ipsum dolor sit amet, elit. Id ab commodi magnam. </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-lg-5 mt-4">
                        <div className="grids-1 box-wrap">
                            <div className="icon">
                                <i className="fas fa-search-plus"></i>
                            </div>
                            <h4><a href="#service" className="title-head mb-3">Search that feels familiar</a></h4>
                            <p className="text-para">Lorem ipsum dolor sit amet, elit. Id ab commodi magnam. </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-lg-5 mt-4">
                        <div className="grids-1 box-wrap">
                            <div className="icon">
                                <i className="fas fa-tags"></i>
                            </div>
                            <h4><a href="#service" className="title-head mb-3">Premium values</a></h4>
                            <p className="text-para">Lorem ipsum dolor sit amet, elit. Id ab commodi magnam. </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-lg-5 mt-4">
                        <div className="grids-1 box-wrap">
                            <div className="icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h4><a href="#service" className="title-head mb-3">Secure Payment</a></h4>
                            <p className="text-para">Lorem ipsum dolor sit amet, elit. Id ab commodi magnam. </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-lg-5 mt-4">
                        <div className="grids-1 box-wrap">
                            <div className="icon">
                                <i className="far fa-money-bill-alt"></i>
                            </div>
                            <h4><a href="#service" className="title-head mb-3">No Commission</a></h4>
                            <p className="text-para">Lorem ipsum dolor sit amet, elit. Id ab commodi magnam. </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-lg-5 mt-4">
                        <div className="grids-1 box-wrap">
                            <div className="icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <h4><a href="#service" className="title-head mb-3">Top Rated Agents</a></h4>
                            <p className="text-para">Lorem ipsum dolor sit amet, elit. Id ab commodi magnam. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="w3l-contact-10 py-5" id="contact">
        <div className="form-41-mian pt-lg-4 pt-md-3 pb-lg-4">
            <div className="container">
                <div className="heading text-center mx-auto">
                    <h5 className="title-subw3hny text-center">Contact our team</h5>
                    <h3 className="title-w3l">Got any <span className="inn-text">Questions? </span></h3>
                </div>

                <div className="contacts-5-grid-main mt-5">
                    <div className="contacts-5-grid">
                        <div className="map-content-5">
                            <div className="d-grid grid-col-2 justify-content-center">
                                <div className="contact-type">
                                    <div className="address-grid">
                                        <span className="fas fa-map-marked-alt"></span>
                                        <h6>Address</h6>
                                        <p>#302, 5th Floor, VHLY-2247 ek,RealHouzing, New York.</p>

                                    </div>
                                    <div className="address-grid">
                                        <span className="fas fa-envelope-open-text"></span>
                                        <h6>Email</h6>
                                        <a href="mailto:mailone@example.com" className="link1">mailone@example.com</a>
                                        <a href="mailto:mailtwo@example.com" className="link1">mailtwo@example.com</a>

                                    </div>
                                    <div className="address-grid">
                                        <span className="fas fa-phone-alt"></span>
                                        <h6>Phone</h6>
                                        <a href="tel:+12 324-016-695" className="link1">+12 324-016-695</a>
                                        <a href="tel:+44 224-058-545" className="link1">+44 224-058-545</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-inner-cont mt-5">
                    <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="signin-form">
                        <div className="form-grids">
                            <div className="form-input">
                                <input type="text" name="w3lName" id="w3lName" placeholder="Enter your name *" required="" />
                            </div>
                            <div className="form-input">
                                <input type="text" name="w3lSubject" id="w3lSubject" placeholder="Enter subject " required />
                            </div>
                            <div className="form-input">
                                <input type="email" name="w3lSender" id="w3lSender" placeholder="Enter your email *" required />
                            </div>
                            <div className="form-input">
                                <input type="text" name="w3lPhone" id="w3lPhone" placeholder="Enter your Phone Number *" required />
                            </div>
                        </div>
                        <div className="form-input">
                            <textarea name="w3lMessage" id="w3lMessage" placeholder="Type your query here" required=""></textarea>
                        </div>
                        <div className="w3-submit text-right">
                            <button className="btn btn-style btn-primary">Send Message <i className="fas fa-paper-plane ms-2"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
       
    </div>
    {/* <section className="w3l-pricing-sec py-5" id="pricing">
        <div className="container py-md-5 py-2">
            <div className="heading text-center mx-auto">
                <h6 className="title-subw3hny mb-1">Our Plans</h6>
                <h3 className="title-w3l mb-2">Our Plans</h3>
            </div>
            <div className="row pricing-main-grids">
                <div className="col-lg-4 col-md-6 pricing-main-grid mt-sm-5 mt-4">
                    <div className="w3-pricing-inner-inf">
                        <div className="pricing-header text-center">
                            <div className="price-icon">
                                <i className="fas fa-home mt-0"></i>
                            </div>
                            <h4>Personal</h4>
                            <p className="pb-3">Free/month</p>
                        </div>
                        <div className="pricing-body pt-3 text-center">
                            <p>10 Listings <br/>2 Featured Listings</p>
                            <div className="pricing-get-button mb-2">
                                <a href="contact.html" className="btn btn-style btn-primary d-block mt-4">
                                    Choose Plan <span className="fas fa-angle-double-right ms-2"></span></a>
                            </div>
                            <p className="subtitle">10% money back guarantee</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pricing-main-grid mt-sm-5 mt-4">
                    <div className="w3-pricing-inner-inf active">
                        <div className="pricing-header text-center">
                            <div className="price-icon">
                                <i className="far fa-building mt-0"></i>
                            </div>
                            <h4>Professional</h4>
                            <p className="pb-3">49.99/6 month</p>
                        </div>
                        <div className="pricing-body pt-3 text-center">
                            <p>20 Listings <br/>5 Featured Listings</p>
                            <div className="pricing-get-button mb-2">
                                <a href="contact.html" className="btn btn-style btn-primary d-block mt-4">
                                    Choose Plan <span className="fas fa-angle-double-right ms-2"></span></a>
                            </div>
                            <p className="subtitle">20% money back guarantee</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pricing-main-grid mt-sm-5 mt-4">
                    <div className="w3-pricing-inner-inf">
                        <div className="pricing-header text-center">
                            <div className="price-icon">
                                <i className="fas fa-building mt-0"></i>
                            </div>
                            <h4>Business</h4>
                            <p className="pb-3">99.99/1 Year</p>
                        </div>
                        <div className="pricing-body pt-3 text-center">
                            <p>30 Listings <br/>10 Featured Listings</p>
                            <div className="pricing-get-button mb-2">
                                <a href="contact.html" className="btn btn-style btn-primary d-block mt-4">
                                    Choose Plan <span className="fas fa-angle-double-right ms-2"></span> </a>
                            </div>
                            <p className="subtitle">10% money back guarantee</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section> */}

    </>
  )
}
