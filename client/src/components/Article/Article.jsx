import React from "react";
import Button from "../../utils/Button/Button";

const Article = () => {
    return (
        <article className="py-20">
            <div className="cont">
                <div className="article-wrapper flex gap-8 flex-col bg-slate-100 p-16 rounded-md items-center">
                    <h2 className="text-4xl font-bold font-outfit">
                        Kaydolun, hizmetlerimizden anında yararlanın.
                    </h2>
                    <p className="text-slate-500 text-center w-1/2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia eum magnam veniam atque. Repellendus, laborum?
                        Illum aspernatur eveniet magni ducimus?
                    </p>
                    <div className="flex gap-4">
                        <input
                            type="text"
                            className="outline-none p-3 text-slate-500 rounded-md text-sm"
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
