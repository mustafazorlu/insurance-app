import React from "react";
import Button from "../../utils/Button/Button";

const Hero = () => {
    return (
        <section className="hero lg:py-40 py-10">
            <div className="cont">
                <div className="hero-wrapper flex gap-16 lg:items-center flex-col lg:flex-row">
                    <div className="hero-text text lg:w-[50%] order-2 lg:order-1">
                        <h1 className="text-[40px] lg:text-[60px] text-center lg:text-left font-semibold font-outfit lg:leading-[60px] leading-[40px] mb-6">
                            A new kind of life insurance
                        </h1>
                        <p className="text-sm mb-10 text-center lg:text-left leading-5 text-slate-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Rerum, ullam. Deleniti doloremque ad nisi
                            mollitia aliquam dolorum commodi facilis, optio
                            voluptatem quos, quas adipisci, assumenda iusto.
                            Odit sequi adipisci maiores!
                        </p>
                        <div className="flex">
                            <Button externalClass="">Şimdi kaydol</Button>
                            <Button externalClass="ml-4 !bg-transparent !border !border-slate-300 !text-slate-900 hover:!bg-slate-100">
                                Daha fazlası için
                            </Button>
                        </div>
                    </div>
                    <div className="hero-image lg:w-[50%] order-1 lg:order-2">
                        <img src="./assets/house.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
