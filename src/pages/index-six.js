import React from "react";
import Select from 'react-select'
import { TypeAnimation } from 'react-type-animation';
import { Link as Link2 } from "react-router-dom";

import ResidentialImage from "../assets/images/property/residential.jpg";
import LandImage from "../assets/images/property/land.jpg";
import CommercialImage from "../assets/images/property/commercial.jpg";
import InvestmentImage from "../assets/images/property/investment.jpg";
import IndustrialImage from "../assets/images/property/industrial.jpg";

import Navbar from "../component/Navbar";
import Client from "../component/Client";
import Footer from "../component/Footer";
import Switcher from "../component/Switcher";
import GetInTuch from "../component/Get-in-tuch";
import PropertyTwo from "../component/Property-two";

import {LuSearch, RxHome, AiOutlineDollarCircle} from "../assets/icons/vander"
import AboutTwo from "../component/about-two";
const Houses = [
    { value: 'AF', label: 'Apartment' },
    { value: 'AZ', label: ' Offices' },
    { value: 'BS', label: 'Townhome' },
]
const minPrice = [
    { value: '1', label: '500' },
    { value: '2', label: '1000' },
    { value: '3', label: '2000' },
    { value: '4', label: '3000' },
    { value: '5', label: '4000' },
    { value: '5', label: '5000' },
    { value: '5', label: '6000' },
]
const maxPrice = [
    { value: '1', label: '500' },
    { value: '2', label: '1000' },
    { value: '3', label: '2000' },
    { value: '4', label: '3000' },
    { value: '5', label: '4000' },
    { value: '5', label: '5000' },
    { value: '5', label: '6000' },
]

export default function IndexSix() {

    return (
        <>
            <Navbar navClass="navbar-white"/>
            {/* Hero Start  */}
            <section class="relative table w-full py-36 md:py-44 lg:py-56 bg-[url('../../assets/images/bg/6.jpg')] bg-no-repeat bg-center bg-cover">
                <div class="absolute inset-0 bg-black/50"></div>
                    <div class="container z-3">
                        <div class="grid md:grid-cols-12 mt-10">
                            <div class="lg:col-span-8 md:col-span-6">
                                <h1 class="font-semibold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6">Find the perfect <br/> 
                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        'home',
                                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                                        'villa',
                                        1000,
                                        'office',
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={40}
                                    style={{ fontSize: '1ren', display: 'inline-block' }}
                                    repeat={Infinity}
                                    cursor={false}
                                    /> for you</h1>
                                <p class="text-white/70 text-xl max-w-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>

                                <div class="mt-4">
                                    <a href="" class="btn bg-green-600 hover:bg-green-700 text-white rounded-md mt-3">Learn More </a>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
                {/* Hero End */}

            <section className="relative md:pb-24 pb-16">
                <div className="container">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="relative -mt-32">
                            <div className="grid grid-cols-1">
                                <div id="StarterContent" className="p-6 bg-white dark:bg-slate-900  md:rounded-se-xl rounded-xl shadow-md dark:shadow-gray-700">
                                    <div id="buy-home" role="tabpanel" aria-labelledby="buy-home-tab">
                                        <form action="#">
                                            <div className="registration-form text-dark text-start">
                                                <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                                    <div>
                                                        <label className="form-label text-slate-900 dark:text-white font-medium">Search : <span className="text-red-600">*</span></label>
                                                        <div className="filter-search-form relative filter-border mt-2">
                                                            <LuSearch className="icons"/>
                                                            <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your Keywords" />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label htmlFor="buy-properties" className="form-label text-slate-900 dark:text-white font-medium">Select Categories:</label>                                                        
                                                        <div className="filter-search-form relative filter-border mt-2">
                                                            <RxHome className=" icons"/>
                                                            <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={Houses} />

                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label htmlFor="buy-min-price" className="form-label text-slate-900 dark:text-white font-medium">Min Price :</label>                                                        
                                                        <div className="filter-search-form relative filter-border mt-2">
                                                            <AiOutlineDollarCircle className="icons"/>
                                                            <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={minPrice} />

                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label htmlFor="buy-max-price" className="form-label text-slate-900 dark:text-white font-medium">Max Price :</label>                                                        
                                                        <div className="filter-search-form relative mt-2">
                                                            <AiOutlineDollarCircle className="icons"/>
                                                            <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={maxPrice} />

                                                        </div>
                                                    </div>

                                                    <div className="lg:mt-6">
                                                        <input type="submit" id="search-buy" name="search" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white searchbtn submit-btn w-full !h-[60px] lg:rounded-none rounded mt-2" value="Search" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <About/> */}
                <AboutTwo/>
                <PropertyTwo/>
                <div className="relative md:pt-24 pt-16">
                    <div className="container">
                        <div className="grid grid-cols-1 pb-8">
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Listing Categories</h3>

                            <p className="text-slate-400 max-w-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                        </div>

                        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 mt-8 md:gap-[30px] gap-3">
                            <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                                <img src={ResidentialImage} alt="" />
                                <div className="p-4">
                                    <Link2 href="#" className="text-xl font-medium hover:text-green-600">Residential</Link2>
                                    <p className="text-slate-400 text-sm mt-1">46 Listings</p>
                                </div>
                            </div>

                            <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                                <img src={LandImage} alt="" />
                                <div className="p-4">
                                    <Link2 href="#" className="text-xl font-medium hover:text-green-600">Land</Link2>
                                    <p className="text-slate-400 text-sm mt-1">124 Listings</p>
                                </div>
                            </div>

                            <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                                <img src={CommercialImage} alt="" />
                                <div className="p-4">
                                    <Link2 href="#" className="text-xl font-medium hover:text-green-600">Commercial</Link2>
                                    <p className="text-slate-400 text-sm mt-1">265 Listings</p>
                                </div>
                            </div>

                            <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                                <img src={IndustrialImage} alt="" />
                                <div className="p-4">
                                    <Link2 href="#" className="text-xl font-medium hover:text-green-600">Industrial</Link2>
                                    <p className="text-slate-400 text-sm mt-1">452 Listings</p>
                                </div>
                            </div>

                            <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                                <img src={InvestmentImage} alt="" />
                                <div className="p-4">
                                    <Link2 href="#" className="text-xl font-medium hover:text-green-600">Investment</Link2>
                                    <p className="text-slate-400 text-sm mt-1">12 Listings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Client />
                <GetInTuch/>
            </section>
            <Footer />
            <Switcher />
            {/* <!-- End --> */}
        </>
    );

}
