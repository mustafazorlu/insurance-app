import React from "react";
import services from "../../data/services";

const Services = () => {
    return (
        <section className="services pt-10 pb-20">
            <div className="cont">
                <h2 className="text-center font-outfit text-[60px] font-medium mb-20">
                    Sigortada güvenin adresi!
                </h2>
                <div className="services-wrapper grid-flow-row">
                    {services.map((item) => (
                        <div
                            className="flex flex-col gap-2 border p-6 rounded-[12px] hover:shadow cursor-pointer"
                            key={item.key}
                        >
                            <div className="icon p-4 max-w-fit rounded-md mb-2 bg-slate-200">
                                {item.icon}
                            </div>
                            <div className="h4 font-outfit font-semibold text-2xl">
                                {item.title}
                            </div>
                            <p className="text-sm text-slate-600">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
