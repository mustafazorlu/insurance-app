import React from "react";
import Button from "../../utils/Button/Button";

const Hero = () => {
    return (
        <section className="hero py-40">
            <div className="cont">
                <div className="hero-wrapper flex gap-16 items-center">
                    <div className="hero-text text w-[50%] ">
                        <h1 className="text-[60px] font-semibold font-outfit leading-[60px] mb-6">
                            A new kind of <br /> life insurance
                        </h1>
                        <p className="text-sm mb-10 leading-5 text-slate-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Rerum, ullam. Deleniti doloremque ad nisi
                            mollitia aliquam dolorum commodi facilis, optio
                            voluptatem quos, quas adipisci, assumenda iusto.
                            Odit sequi adipisci maiores!
                        </p>
                        <Button externalClass="">Şimdi kaydol</Button>
                        <Button externalClass="ml-4 !bg-transparent !border !border-slate-300 !text-slate-900 hover:!bg-slate-100">
                            Daha fazlası için
                        </Button>
                    </div>
                    <div className="hero-image w-[50%]">
                        <img src="./assets/house.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
