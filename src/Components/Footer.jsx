import React from 'react'

export default function Footer() {
  return (
    <>
    <footer class="w3l-footer9">
        <section class="footer-inner-main py-5">
            <div class="container py-md-4">
                <div class="right-side">
                    <div class="row footer-hny-grids sub-columns">
                        <div class="col-lg-3 sub-one-left">
                            <h6>About </h6>
                            <p class="footer-phny pe-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ute dolor sit.</p>
                            <div class="columns-2 mt-4 pt-lg-2">
                                <ul class="social">
                                    <li><a href="#facebook"><span class="fab fa-facebook-f"></span></a>
                                    </li>
                                    <li><a href="#linkedin"><span class="fab fa-linkedin-in"></span></a>
                                    </li>
                                    <li><a href="#twitter"><span class="fab fa-twitter"></span></a>
                                    </li>
                                    <li><a href="#google"><span class="fab fa-google-plus-g"></span></a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 sub-two-right">
                            <h6>Company</h6>
                            <ul>

                                <li><a href="#why"><i class="fas fa-angle-right"></i> Why Us</a>
                                </li>
                                <li><a href="#licence"><i class="fas fa-angle-right"></i>Our Agents
                                    </a>
                                </li>
                                <li><a href="#log"><i class="fas fa-angle-right"></i>Our Offers
                                    </a></li>

                                <li><a href="#career"><i class="fas fa-angle-right"></i> Careers</a></li>

                            </ul>
                        </div>
                        <div class="col-lg-2 sub-two-right">
                            <h6>Services</h6>
                            <ul>
                                <li><a href="#processing"><i class="fas fa-angle-right"></i> Buy Properties</a>
                                </li>
                                <li><a href="#research"><i class="fas fa-angle-right"></i> Sell Properties</a>
                                </li>
                                <li><a href="#metal"><i class="fas fa-angle-right"></i> Rent Properties</a>
                                </li>
                                <li><a href="#metal"><i class="fas fa-angle-right"></i> Property Search</a>
                                </li>


                            </ul>
                        </div>
                        <div class="col-lg-2 sub-two-right">
                            <h6>Explore</h6>
                            <ul>
                                <li><a href="#processing"><i class="fas fa-angle-right"></i> Homes for Rent</a>
                                </li>
                                <li><a href="#research"><i class="fas fa-angle-right"></i> Apartments for Rent</a>
                                </li>
                                <li><a href="#metal"><i class="fas fa-angle-right"></i> Homes for Sale</a>
                                </li>
                                <li><a href="#metal"><i class="fas fa-angle-right"></i> Apartments for Sale</a>
                                </li>


                            </ul>
                        </div>
                        <div class="col-lg-3 sub-one-left ps-lg-5">
                            <h6>Stay Update!</h6>
                            <p class="w3f-para mb-4">Subscribe to our newsletter to receive our weekly feed.</p>
                            <div class="w3l-subscribe-content align-self mt-lg-0 mt-5">
                                <form action="#" method="post" class="subscribe-wthree">
                                    <div class="flex-wrap subscribe-wthree-field">
<input class="form-control" type="email" 
placeholder="Email" name="email" required=""/>
                                        <button class="btn btn-style btn-primary" type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>
                <div class="below-section mt-5 pt-lg-3">
                    <div class="copyright-footer">
                        <div class="columns text-left">
                            <p>© 2021 RealHouzing.All rights reserved. Design by <a href="https://w3layouts.com/" target="_blank">
                                    W3Layouts</a></p>
                        </div>
                        <ul class="footer-w3list text-right">
                            <li><a href="#url">Privacy Policy</a>
                            </li>
                            <li><a href="#url">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>

        <button onclick="topFunction()" id="movetop" title="Go to top">
            <span class="fas fa-level-up-alt" aria-hidden="true"></span>
        </button>
    </footer>
      
    </>
  )
}
