import React from 'react';
import Logo from '../../assets/landing/Logo.png';
import LogoFooter from '../../assets/landing/LogoFooter.png';
import MainImage from '../../assets/landing/main-image.png';
import Laptop from '../../assets/landing/Laptop.png';
import People from '../../assets/landing/People.png';
import Feature1 from '../../assets/landing/Feature1.png';
import Feature2 from '../../assets/landing/Feature2.png';
import Feature3 from '../../assets/landing/Feature3.png';
import Feature4 from '../../assets/landing/Feature4.png';
import Feature5 from '../../assets/landing/Feature5.png';
import Feature6 from '../../assets/landing/Feature6.png';
import Mail from '../../assets/landing/mail.png';
import Dribbble from '../../assets/landing/Dribbble.png'
import Instagram from '../../assets/landing/Instagram.png'
import Twitter from '../../assets/landing/Twitter.png'
import Youtube from '../../assets/landing/Youtube.png'
import { Dropdown } from 'react-bootstrap';
import { CustomToggle } from '../../Components/CustomToggle';
import { IoMdMenu } from 'react-icons/io';

export default function LandingPage() {
    return (
        <>
            <header>
                <img src={Logo} />
                <nav className="nav">
                    <Dropdown alignRight>
                        <Dropdown.Toggle as={CustomToggle} id="dropdown-autoclose-true">
                            <div className="filter my-3 my-md-0">
                                <IoMdMenu size={32}/>
                            </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="p-2">
                            <Dropdown.Item className="drop-menu-item">
                                <a href="#">About Us</a>
                            </Dropdown.Item>
                            <Dropdown.Item className="drop-menu-item">
                                <a href="#">How It Works</a>
                            </Dropdown.Item>
                            <Dropdown.Item className="drop-menu-item">
                                <a href="#">FAQs</a>
                            </Dropdown.Item>
                            <Dropdown.Item className="drop-menu-item">
                                <a href="/login">Log In</a>
                            </Dropdown.Item>
                            <Dropdown.Item className="drop-menu-item">
                                <a href="/auth/sign_up1">Sign up</a>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <a href="#">About Us</a>
                    <a href="#">How It Works</a>
                    <a href="#">FAQs</a>
                    <a href="/login">Log In</a>
                    <button className="button" onClick={() => window.location.assign('/auth/sign_up1')}>Sign up</button>
                </nav>
            </header>

            <main>
                <section className="first-section">
                    <div className="first-col">
                        <h1 className="title">A market place<br /> for businesses</h1>
                        <p className='text'>We make the world of businesses much easier by helping businesses connect with one another.</p>
                        <button className="button">Get Started</button>
                        <h2 className="title">Built for growth</h2>
                    </div>
                    <div className="second-col">
                        <img className="image" src={MainImage} alt="Man having a video conference" />
                        <p className='text'>An API that provides infrastructure for
                            connecting people and businesses to service providers to ensure accessibility to
                            and of quality services for all. </p>
                    </div>
                </section>

                <section className="second-section">
                    <h2 className="title"><span>Connecting </span>one <br />business to the other.</h2>
                    <div className="col-row">
                        <div className="first-col">
                            <p className='text'>Run your business on simple, useful modern tools and account services that help you get started and grow your business.</p>
                            <button className="button">Merchant</button>
                            <button className="button">Service Providers</button>
                            <button className="button">Customer</button>
                        </div>
                        <div className="second-col">
                            <img src={Laptop} alt="Laptop" className="image" />
                        </div>
                    </div>
                </section>

                <section className="third-section">
                    <div className="first-col">
                        <img src={People} alt="People" className="image" />
                    </div>
                    <div className="second-col">
                        <h2 className="title">Simplified <br />Connections</h2>
                        <p className='text'>A framework of large networked connections with different
                            organization having huge existing customer base and also diversity with respect
                            to range of services.</p>
                        <ul className="list">
                            <li className="list-item">Constantly improving</li>
                            <li className="list-item">Built-in services you need for business</li>
                            <li className="list-item">Save time and money</li>
                        </ul>
                        <button className='button' onClick={() => window.location.assign('/auth/sign_up1')}>Get Started</button>
                    </div>
                </section>

                <section className="fourth-section">
                    <h2 className="title">Tailor-made features</h2>
                    <p className='text'>Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
                    <div className='features-grid'>
                        <div className='feature'>
                            <img src={Feature1} className='image' alt="Feature" />
                            <h4 className='subtitle'>Robust workflow</h4>
                            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                        </div>
                        <div className='feature'>
                            <img src={Feature2} className='image' alt="Feature" />
                            <h4 className='subtitle'>Flexibility</h4>
                            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                        </div>
                        <div className='feature'>
                            <img src={Feature3} className='image' alt="Feature" />
                            <h4 className='subtitle'>User friendly</h4>
                            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                        </div>
                        <div className='feature'>
                            <img src={Feature4} className='image' alt="Feature" />
                            <h4 className='subtitle'>Multiple layouts</h4>
                            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                        </div>
                        <div className='feature'>
                            <img src={Feature5} className='image' alt="Feature" />
                            <h4 className='subtitle'>Better components</h4>
                            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                        </div>
                        <div className='feature'>
                            <img src={Feature6} className='image' alt="Feature" />
                            <h4 className='subtitle'>Well organised</h4>
                            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                        </div>
                    </div>
                </section>

                <section className='fifth-section'>
                    <div className="background">
                        <img src={Mail} alt="Mail" className='image' />
                        <div className="content">
                            <h2 className="title">Join 569 more people in the waitlist</h2>
                            <div className="input-container">
                                <input type="text" placeholder="Your email address" className="input" />
                                <button className="button">Join the waitlist</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div>
                    <img src={LogoFooter} alt="Logo" className="logo" />
                    <p className="text">Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.</p>
                    <div className="icons">
                        <div className="icon"><img src={Instagram} alt="Instagram" /></div>
                        <div className="icon"><img src={Dribbble} alt="Dribbble" /></div>
                        <div className="icon"><img src={Twitter} alt="Twitter" /></div>
                        <div className="icon"><img src={Youtube} alt="Youtube" /></div>
                    </div>
                </div>
                <div>
                    <h4 className="subtitle">Company</h4>
                    <a className='text' href="#">Home</a><br />
                    <a className='text' href="#">Blogs</a><br />
                    <a className='text' href="#">About</a><br />
                    <a className='text' href="#">Carreers</a><br />
                </div>
                <div>
                    <h4 className="subtitle">Legal</h4>
                    <a className='text' href="#">Terms & Conditions</a><br />
                    <a className='text' href="#">Privacy Policy</a><br />
                </div>
                <div>
                    <h4 className="subtitle">Reach Us</h4>
                    <p className='text'>hello@landify.co</p>
                    <p className='text'>+91 98765 43210</p>
                    <p className='text'>772 Lyonwood Ave Walnut, CA 91789</p>
                </div>
                <div className='bottom'>
                    <p className="text">© 2020 Landify UI Kit. All rights reserved</p>
                    <div className='links'>
                        <a className='text' href="#">Terms & Conditions</a>
                        <a className='text' href="#">Privacy Policy</a>
                        <a className='text' href="#">Sitemap</a>
                        <a className='text' href="#">Disclaimer</a>
                    </div>
                </div>
            </footer>
        </>
    )
};