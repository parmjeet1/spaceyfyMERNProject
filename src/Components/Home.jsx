import React from 'react'
import ProudctList from './ProudctList';

 function Home() {
  return (
   <>
   <h1>Feature1 branch</h1>
   <section className="w3l-main-slider banner-slider" id="home">
        <div className="owl-one owl-carousel owl-theme">
            <div className="item">
                <div className="slider-info banner-view banner-top1">
                    <div className="container">
                        <div className="banner-info header-hero-19">
                            <p className="w3hny-tag">Real Estate is our life</p>
                            <h3 className="title-hero-19">The creativity of the new world.</h3>
                            <a href="./" className="btn btn-style btn-primary mt-4">Read More <i className="fas fa-angle-double-right ms-2"></i></a>

                        </div>
                    </div>
                </div>
            </div>


        </div>


    </section>
    <ProudctList/>
    <div className=" w3l-3-grids py-5" id="grids-3">
        <div className="container py-md-4">
            <div className="row">
                <div className="col-md-6 mt-md-0">
                    <div className="grids3-info position-relative">
                        <a href="#img" className="d-block zoom">
                            <img src="assets/images/banner1.jpg" alt="" className="img-fluid news-image"/></a>
                        <div className="w3-grids3-info">
                            <h4 className="gdnhy-1"><a href="#img">Buy a Commercial<br/>Property</a>
                                <a className="w3item-link btn btn-style mt-4" href="#">
                                    Explore Property <i className="fas fa-angle-double-right ms-2"></i>
                                </a>

                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-md-0 mt-4 grids3-info2">
                    <div className="grids3-info position-relative">
                        <a href="#img" className="d-block zoom">
                            <img src="assets/images/banner2.jpg" alt="" className="img-fluid news-image"/></a>
                        <div className="w3-grids3-info second">
                            <h4 className="gdnhy-1"><a href="#img">Lease a Commercial<br/>Property</a>
                                <a className="w3item-link btn btn-style mt-4" href="#">
                                    Explore Property <i className="fas fa-angle-double-right ms-2"></i>
                                </a>
                            </h4>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <section className="w3l-grids-3 py-5" id="about">
        <div className="container py-md-5 py-3">
            <div className="row bottom-ab-grids">
                <div className="w3l-video-left col-lg-6" id="video">

                    <div className="w3l-index5">
                        <div className="position-relative mt-4">
                            <a href="#small-dialog" className="popup-with-zoom-anim play-view text-center position-absolute">
                                <span className="video-play-icon">
                                    <span className="fa fa-play"></span>
                                </span>
                            </a>
                          
                            <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                                <iframe src="https://player.vimeo.com/video/23512331" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                            </div>
							
                        </div>
                    
                    </div>
                </div>
                <div className="w3ab-left-top col-lg-6 mt-lg-0 mt-5 ps-lg-5">
                    <h6 className="title-subw3hny mb-1">Buy a Home</h6>
                    <h3 className="title-w3l mb-2">Find, Buy & Own Your Dream Home</h3>
                    <p className="my-3"> Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel.Lorem ipsum dolor sit, amet consectetur ante ipsum elit. </p>
                    <p className="my-3"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                        Nulla mollis dapibus nunc.</p>
                    <a href="about.html" className="btn btn-style btn-primary mt-4">Explore Buying <i className="fas fa-angle-double-right ms-2"></i></a>
                </div>
            </div>
        </div>
    </section>
    <section className="w3l-passion-mid-sec py-5 pt-0">
        <div className="container py-md-5 py-3 pt-0">
            <div className="container">
                <div className="row w3l-passion-mid-grids">
                    <div className="col-lg-6 passion-grid-item-info pe-lg-5 mb-lg-0 mb-5">
                        <h6 className="title-subw3hny mb-1">Post Your Property</h6>
                        <h3 className="title-w3l mb-4">Property owners get free posting when they register</h3>
                        <p className="mt-3 pe-lg-5">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in
                            ligula. Semper at tempufddfel.Lorem ipsum dolor sit, amet consectetur elit. Earum mollitia
                            cum ex ipsam autem!earum sequi amet.</p>
                        <div className="w3banner-content-btns">
                            <a href="about.html" className="btn btn-style btn-primary mt-lg-5 mt-4 me-2">Property For Free <i className="fas fa-angle-double-right ms-2"></i></a>

                        </div>
                    </div>
                    <div className="col-lg-6 passion-grid-item-info">
<img src="assets/images/g6.jpg" alt="" className="img-fluid radius-image"/>
                    </div>
                </div>

            </div>
        </div>
    </section>
    

    <section class="w3l-features py-5" id="features">
        <div class="container py-lg-5 py-md-4 py-2">
            <div class="title-content text-center mb-lg-3 mb-4">
                <h6 class="title-subw3hny mb-1">What We Do</h6>
                <h3 class="title-w3l">We're on a Mission to Change
                    View of RealEstate Field.</h3>
            </div>
            <div class="main-cont-wthree-2">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6 mt-lg-5 mt-4">
                        <div class="grids-1 box-wrap">
                            <div class="icon">
                                <i class="fas fa-pen-fancy"></i>
                            </div>
                            <h4><a href="#service" class="title-head mb-3">Your One-Stop Shop for Finding Your Dream Home</a></h4>
                            <p class="text-para">Lorem ipsum dolor sit amet, elit. Id ab commodi magnam. </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-lg-5 mt-4">
                        <div class="grids-1 box-wrap">
                            <div class="icon">
                                <i class="fas fa-layer-group"></i>
                            </div>
                            <h4><a href="#service" class="title-head mb-3">Schedule a Free, No-Obligation Appointment</a></h4>
                            <p class="text-para">Lorem ipsum dolor sit amet, elit. Id ab commodi magnam. </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-lg-5 mt-4">
                        <div class="grids-1 box-wrap">
                            <div class="icon">
                                <i class="fas fa-house-user"></i>
                            </div>
                            <h4><a href="#service" class="title-head mb-3">Understand the Value of Your Property</a></h4>
                            <p class="text-para">Lorem ipsum dolor sit amet, elit. Id ab commodi magnam. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    <section class="locations-1" id="locations">
        <div class="locations py-5">
            <div class="container py-lg-5 py-md-4 py-2">
                <div class="heading text-center mx-auto">
                    <h6 class="title-subw3hny mb-1">Our Properties</h6>
                    <h3 class="title-w3l mb-3">Latest Properties</h3>
                </div>
                <div class="row pt-md-5 pt-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="w3property-grid">
                            <a href="#property">
                                <div class="box16">
                                    <div class="rentext-listing-category"><span class="pro-left">Buy</span><span class="pro-right">Rent</span></div>
 <img class="img-fluid" src="assets/images/g1.jpg" alt=""/>
                                    <div class="box-content">
                                        <h3 class="title">$25,00,000</h3>
                                        <span class="post">51 Merrick Way, Coral Gables, USA</span>
                                    </div>
                                </div>
                            </a>
                            <div class="list-information space-between">
                                <ul class="product-features">
                                    <li>
                                        <i class="fas fa-bed"></i>
                                        <span class="listable-value">
                                            <span class="prefix">
                                                Beds </span>

                                            <span class="value">
                                                <span>0</span>4 </span>

                                            <span class="suffix">
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <i class="fas fa-shower"></i>
                                        <span class="listable-value">
                                            <span class="prefix">
                                                Baths </span>

                                            <span class="value">
                                                <span>0</span>2 </span>

                                            <span class="suffix">
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <i class="fas fa-vector-square"></i>
                                        <span class="listable-value">
                                            <span class="prefix">
                                            </span>

                                            <span class="value">
                                                1200 </span>

                                            <span class="suffix">
                                                Sqft </span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-md-0 mt-4">
                        <div class="w3property-grid">
                            <a href="#property">
                                <div class="box16">
                                    <div class="rentext-listing-category"><span>Buy</span><span>Rent</span></div>
<img class="img-fluid" src="assets/images/g2.jpg" alt=""/>
                                    <div class="box-content">
                                        <h3 class="title">$37,00,000</h3>
                                        <span class="post">51 Merrick Way, Coral Gables, USA</span>

                                    </div>
                                </div>
                            </a>
                            <div class="list-information space-between">
                                <ul class="product-features">
                                    <li>
                                        <i class="fas fa-bed"></i>
                                        <span class="listable-value">
                                            <span class="prefix">
                                                Beds </span>

                                            <span class="value">
                                                <span>0</span>2 </span>

                                            <span class="suffix">
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <i class="fas fa-shower"></i>
                                        <span class="listable-value">
                                            <span class="prefix">
                                                Baths </span>

                                            <span class="value">
                                                <span>0</span>2 </span>

                                            <span class="suffix">
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <i class="fas fa-vector-square"></i>
                                        <span class="listable-value">
                                            <span class="prefix">
                                            </span>

                                            <span class="value">
                                                1000 </span>

                                            <span class="suffix">
                                                Sqft </span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-lg-0 pt-lg-0 mt-4 pt-md-2">
                        <div class="w3property-grid">
                            <a href="#property">
                                <div class="box16">
                                    <div class="rentext-listing-category"><span>Buy</span><span>Rent</span></div>
<img class="img-fluid" src="assets/images/g3.jpg" alt=""/>
                                    <div class="box-content">
                                        <h3 class="title">$41,00,000</h3>
                                        <span class="post">51 Merrick Way, Coral Gables, USA</span>

                                    </div>
                                </div>
                            </a>
                            <div class="list-information space-between">
                                <ul class="product-features">
                                    <li>
                                        <i class="fas fa-bed"></i>
                                        <span class="listable-value">
                                            <span class="prefix">
                                                Beds </span>

                                            <span class="value">
                                                <span>0</span>3 </span>

                                            <span class="suffix">
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <i class="fas fa-shower"></i>
                                        <span class="listable-value">
                                            <span class="prefix">
                                                Baths </span>

                                            <span class="value">
                                                <span>0</span>2 </span>

                                            <span class="suffix">
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <i class="fas fa-vector-square"></i>
                                        <span class="listable-value">
                                            <span class="prefix">
                                            </span>

                                            <span class="value">
                                                1400 </span>

                                            <span class="suffix">
                                                Sqft </span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-4 pt-md-2">
                        <div class="w3property-grid">
                            <a href="#property">
                                <div class="box16">
                                    <div class="rentext-listing-category"><span>Buy</span><span>Rent</span></div>
<img class="img-fluid" src="assets/images/g4.jpg" alt=""/>
                                    <div class="box-content">
                                        <h3 class="title">$19,00,000</h3>
                                        <span class="post">51 Merrick Way, Coral Gables, USA</span>

                                    </div>
                                </div>
                            </a>
                            <div class="list-information space-between">
                                <ul class="product-features">
                                    <li>
                                        <i class="fas fa-bed"></i>
                                        <span class="listable-value">
                                            <span class="prefix">
                                                Beds </span>

                                            <span class="value">
                                                <span>0</span>2 </span>

                                            <span class="suffix">
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <i class="fas fa-shower"></i>
                                        <span class="listable-value">
                                            <span class="prefix">
                                                Baths </span>

                                            <span class="value">
                                                <span>0</span>2 </span>

                                            <span class="suffix">
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <i class="fas fa-vector-square"></i>
                                        <span class="listable-value">
                                            <span class="prefix">
                                            </span>

                                            <span class="value">
                                                1200 </span>

                                            <span class="suffix">
                                                Sqft </span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-4 pt-md-2">
                        <div class="w3property-grid">
                            <a href="#property">
                                <div class="box16">
                                    <div class="rentext-listing-category"><span>Buy</span><span>Rent</span></div>
<img class="img-fluid" src="assets/images/g5.jpg" alt=""/>
                                    <div class="box-content">
                                        <h3 class="title">$26,00,000</h3>
                                        <span class="post">51 Merrick Way, Coral Gables, USA</span>

                                    </div>
                                </div>
                            </a>
                            <div class="list-information space-between">
                                <ul class="product-features">
                                    <li>
                                        <i class="fas fa-bed"></i>
                                        <span class="listable-value">
                                            <span class="prefix">
                                                Beds </span>

                                            <span class="value">
                                                <span>0</span>3 </span>

                                            <span class="suffix">
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <i class="fas fa-shower"></i>
                                        <span class="listable-value">
                                            <span class="prefix">
                                                Baths </span>

                                            <span class="value">
                                                <span>0</span>2 </span>

                                            <span class="suffix">
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <i class="fas fa-vector-square"></i>
                                        <span class="listable-value">
                                            <span class="prefix">
                                            </span>

                                            <span class="value">
                                                1400 </span>

                                            <span class="suffix">
                                                Sqft </span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-4 pt-md-2">
                        <div class="w3property-grid">
                            <a href="#property">
                                <div class="box16">
                                    <div class="rentext-listing-category"><span>Buy</span><span>Rent</span></div>
<img class="img-fluid" src="assets/images/g6.jpg" alt=""/>
                                    <div class="box-content">
                                        <h3 class="title">$34,00,000</h3>
                                        <span class="post">51 Merrick Way, Coral Gables, USA</span>
                                    </div>
                                </div>
                            </a>
                            <div class="list-information space-between">
                                <ul class="product-features">
                                    <li>
                                        <i class="fas fa-bed"></i>
                                        <span class="listable-value">
                                            <span class="prefix">
                                                Beds </span>

                                            <span class="value">
                                                <span>0</span>3 </span>

                                            <span class="suffix">
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <i class="fas fa-shower"></i>
                                        <span class="listable-value">
                                            <span class="prefix">
                                                Baths </span>

                                            <span class="value">
                                                <span>0</span>1 </span>

                                            <span class="suffix">
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <i class="fas fa-vector-square"></i>
                                        <span class="listable-value">
                                            <span class="prefix">
                                            </span>

                                            <span class="value">
                                                1200 </span>

                                            <span class="suffix">
                                                Sqft </span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <section class="w3l-join-main py-5">
        <div class="container py-md-5">
            <div class="w3l-project-in">
                <div class="bottom-info text-center pb-lg-5">
                    <div class="header-section pe-lg-5">
                        <h6 class="title-subw3hny mb-2">Join With Us</h6>
                        <h3 class="title-w3l two mb-2">Become a Real Estate Agent
                        </h3>
                        <p class="mb-2">We only work with the best companies around the globe</p>
                        <div class="w3banner-content-btns pb-5 pb-5">
                            <a href="about.html" class="btn btn-style btn-primary mt-4">Read More <i class="fas fa-angle-double-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    <section class="w3l-testimonials-main" id="testimonials">
        <div class="container">
            <div class="w3l-clients">
                <div id="owl-demo1" class="owl-carousel owl-theme">
                    <div class="item">
                        <div class="row no-gutters m-lg-0 test-w3hny-info">
                            <div class="col-lg-5 w3l-left-img1">
                            </div>
                            <div class="col-lg-7 w3l-right-info">
                                <div class="testimonial-content">
                                    <div class="testimonial">
                                        <div class="testi-des">

                                            <div class="peopl align-self">
                                                <h4>John wilson</h4>
                                                <p class="indentity">Customer</p>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <q><i class="fas fa-quote-left me-2"></i> Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel.Lorem ipsum dolor sit, amet consectetur ante ipsum elit.</q>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>
    </section>
  
    <section class="w3l-blog">
        <div class="blog py-5" id="Newsblog">
            <div class="container py-lg-5 py-md-4 py-2">
                <div class="title-content text-center mb-lg-3 mb-4">
                    <h6 class="title-subw3hny mb-1">Our Article</h6>
                    <h3 class="title-w3l mb-5">Stay Updated with Our 
                        <br/>News Feed</h3>
                </div>

                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6 item">
                        <div class="card">
                            <div class="card-header p-0 position-relative">
                                <a href="#blog" class="zoom d-block">
<img class="card-img-bottom d-block"
 src="assets/images/g3.jpg" alt="Card image cap"/>
                                </a>
                            </div>
                            <div class="card-body blog-details">

                                <a href="#blog" class="blog-desc">Private Contemporary Home Balancing Openness</a>
                                <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo.</p>
                            </div>
                            <div class="card-footer">
                                <div class="author align-items-center">
                                    <a href="#author" class="post-author">
<img src="assets/images/team1.jpg" alt=""
 class="img-fluid rounded-circle"/>
                                    </a>
                                    <ul class="blog-meta">
                                        <li>
                                            <span class="meta-value">by</span><a href="#author"> David Marks</a>
                                        </li>
                                    </ul>
                                    <div class="date">
                                        <p>20 Oct, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 item mt-md-0 mt-5">
                        <div class="card">
                            <div class="card-header p-0 position-relative">
                                <a href="#blog" class="zoom d-block">
<img class="card-img-bottom d-block" 
src="assets/images/g4.jpg" alt="Card image cap" />
                                </a>
                            </div>
                            <div class="card-body blog-details">

                                <a href="#blog" class="blog-desc">How Does A Designer Home Look Like</a>
                                <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo.</p>
                            </div>
                            <div class="card-footer">
                                <div class="author align-items-center">
                                    <a href="#author" class="post-author">
<img src="assets/images/team2.jpg"
 alt="" class="img-fluid rounded-circle"/>
                                    </a>
                                    <ul class="blog-meta">
                                        <li>
                                            <span class="meta-value">by</span><a href="#author"> Lynda Stone</a>
                                        </li>
                                    </ul>
                                    <div class="date">
                                        <p>22 Oct, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                        <div class="card">
                            <div class="card-header p-0 position-relative">
                                <a href="#blog" class="zoom d-block">
<img class="card-img-bottom d-block" 
src="assets/images/g2.jpg" alt="Card image cap"/>
                                </a>
                            </div>
                            <div class="card-body blog-details">

                                <a href="#blog" class="blog-desc">Private Contemporary Home Balancing Openness</a>
                                <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo.</p>
                            </div>
                            <div class="card-footer">
                                <div class="author align-items-center">
                                    <a href="#author" class="post-author">
 <img src="assets/images/team3.jpg"
  alt="" class="img-fluid rounded-circle"/>
                                    </a>
                                    <ul class="blog-meta">
                                        <li>
                                            <span class="meta-value">by</span><a href="#author"> David Nelson</a>
                                        </li>
                                    </ul>
                                    <div class="date">
                                        <p>23 Oct, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}
export default Home;