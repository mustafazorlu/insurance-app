import React from "react";
import Button from "../../utils/Button/Button";

const Article = () => {
    return (
        <article className="py-20">
            <div className="cont">
                <div className="article-wrapper flex gap-8 flex-col bg-slate-200 p-16 rounded-md items-center">
                    <h2 className="text-4xl font-bold font-outfit text-center lg:text-left">
                        Kaydolun, hizmetlerimizden anında yararlanın.
                    </h2>
                    <p className="text-slate-500 text-center lg:w-1/2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia eum magnam veniam atque. Repellendus, laborum?
                        Illum aspernatur eveniet magni ducimus?
                    </p>
                    <div className="flex gap-4 flex-col lg:flex-row">
                        <input
                            type="text"
                            className="outline-none p-4 text-slate-500 rounded-md text-sm"
                            placeholder="E-postanızı giriniz"
                        />
                        <Button>Kaydol</Button>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Article;
