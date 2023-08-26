import React from "react";
import { Hexagon } from "react-feather";
import {RxHome, BsBriefcase,FiKey} from "../assets/icons/vander"

export default function Feature() {
    return (
        <>
            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">How It Works</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">

                    <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                <RxHome className="text-3xl"/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h5 className="text-xl font-medium">Evaluate Property</h5>
                            <p className="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                        </div>
                    </div>

                    <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                <BsBriefcase className="text-3xl"/>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h5 className="text-xl font-medium">Meeting with Agent</h5>
                            <p className="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                        </div>
                    </div>

                    <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                <FiKey className="text-3xl"/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h5 className="text-xl font-medium">Close the Deal</h5>
                            <p className="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
