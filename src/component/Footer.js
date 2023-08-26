import React from "react";
import { Link as Link2 } from "react-router-dom";
import LogoLight from "../assets/images/logo-light.png";
import { MapPin, Mail, Phone, Dribbble, Linkedin, Facebook, Twitter, Instagram, ShoppingCart } from 'react-feather';
import {HiOutlineEnvelope, BsPencil, MdKeyboardArrowRight, BiLogoBehance} from "../assets/icons/vander"


export default function Footer() {

    return (
        <>
            <footer className="relative bg-slate-900 dark:bg-slate-800 mt-24">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="relative py-16">
                            {/* <!-- Subscribe --> */}
                            <div className="relative w-full">
                                <div className="relative -top-40 bg-white dark:bg-slate-900 lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700 overflow-hidden">
                                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                                        <div className="ltr:md:text-left rtl:md:text-right text-center z-1">
                                            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Subscribe to Newsletter!</h3>
                                            <p className="text-slate-400 max-w-xl mx-auto">Subscribe to get latest updates and information.</p>
                                        </div>

                                        <div className="subcribe-form z-1">
                                            <form className="relative max-w-lg md:ms-auto">
                                                <input type="email" id="subcribe" name="email" className="rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-700" placeholder="Enter your email :" />
                                                <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white rounded-full">Subscribe</button>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="absolute -top-5 -start-5">
                                        <HiOutlineEnvelope  className="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"/>
                                    </div>

                                    <div className="absolute -bottom-5 -end-5">
                                        <BsPencil className="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90"/>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] -mt-24">
                                    <div className="lg:col-span-4 md:col-span-12">
                                        <Link2 to="#" className="text-[22px] focus:outline-none">
                                            <img src={LogoLight} alt="" />
                                        </Link2>
                                        <p className="mt-6 text-gray-300">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>

                                    </div>

                                    <div className="lg:col-span-2 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">Company</h5>
                                        <ul className="list-none footer-list mt-6">
                                            <li><Link2 to="/aboutus" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> About us</Link2></li>
                                            <li className="mt-[10px]"><Link2 to="/features" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> Services</Link2></li>
                                            <li className="mt-[10px]"><Link2 to="/pricing" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> Pricing</Link2></li>
                                            <li className="mt-[10px]"><Link2 to="/blog" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> Blog</Link2></li>
                                            <li className="mt-[10px]"><Link2 to="/auth-login" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> Login</Link2></li>
                                        </ul>
                                    </div>

                                    <div className="lg:col-span-3 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">Usefull Links</h5>
                                        <ul className="list-none footer-list mt-6">
                                            <li><Link2 to="/terms" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> Terms of Services</Link2></li>
                                            <li className="mt-[10px]"><Link2 to="/privacy" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> Privacy Policy</Link2></li>
                                            <li className="mt-[10px]"><Link2 to="/listing-one" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> Listing</Link2></li>
                                            <li className="mt-[10px]"><Link2 to="/contact" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> Contact</Link2></li>
                                        </ul>
                                    </div>

                                    <div className="lg:col-span-3 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">Contact Details</h5>
                                        <div className="flex mt-6">
                                            <MapPin className="w-5 h-5 text-green-600 me-3"></MapPin>
                                            <div className="">
                                                <h6 className="text-gray-300 mb-2">C/54 Northwest Freeway, <br /> Suite 558, <br /> Houston, USA 485</h6>
                                                <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" data-type="iframe" className="text-green-600 hover:text-green-700 duration-500 ease-in-out lightbox">View on Google map</a>
                                            </div>
                                        </div>

                                        <div className="flex mt-6">
                                            <Mail className="w-5 h-5 text-green-600 me-3"></Mail>
                                            <div className="">
                                                <a href="mailto:contact@example.com" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">contact@example.com</a>
                                            </div>
                                        </div>

                                        <div className="flex mt-6">
                                            <Phone className="w-5 h-5 text-green-600 me-3"></Phone>
                                            <div className="">
                                                <a href="tel:+152534-468-854" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">+152 534-468-854</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Subscribe --> */}
                        </div>
                    </div>
                </div>

                <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
                    <div className="container text-center">
                        <div className="grid md:grid-cols-2 items-center gap-6">
                            <div className="ltr:md:text-left rtl:md:text-right text-center">
                                <p className="mb-0 text-gray-300">© <script type="text/javascript" id="www-widgetapi-script" src="https://www.youtube.com/s/player/d87d581f/www-widgetapi.vflset/www-widgetapi.js"></script><script id="iframe_api" src="https://www.youtube.com/iframe_api"></script>{(new Date().getFullYear())}{" "} Hously. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link2 to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link2>.</p>
                            </div>

                            <ul className="list-none ltr:md:text-right rtl:md:text-left text-center">
                                <li className="inline ms-1"><Link2 to="https://1.envato.market/hously-react" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><ShoppingCart className="h-4 w-4"></ShoppingCart></Link2></li>
                                <li className="inline ms-1"><Link2 to="https://dribbble.com/shreethemes" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><Dribbble className="h-4 w-4"></Dribbble></Link2></li>
                                <li className="inline ms-1"><Link2 to="https://www.behance.net/shreethemes" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><BiLogoBehance className="align-baseline"/></Link2></li>
                                <li className="inline ms-1"><Link2 to="http://linkedin.com/company/shreethemes" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><Linkedin className="h-4 w-4"></Linkedin></Link2></li>
                                <li className="inline ms-1"><Link2 to="https://www.facebook.com/shreethemes" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><Facebook className="h-4 w-4"></Facebook></Link2></li>
                                <li className="inline ms-1"><Link2 to="https://www.instagram.com/shreethemes/" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><Instagram className="h-4 w-4"></Instagram></Link2></li>
                                <li className="inline ms-1"><Link2 to="https://twitter.com/shreethemes" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><Twitter className="h-4 w-4"></Twitter></Link2></li>
                                <li className="inline ms-1"><Link2 to="mailto:support@shreethemes.in" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><Mail className="h-4 w-4"></Mail></Link2></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );

}