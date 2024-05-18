import React from "react";
import Button from "../../utils/Button/Button";

const Header = () => {
    return (
        <header className="header py-3">
            <div className="cont">
                <div className="header-content flex justify-between items-center">
                    <div className="logo text-xl font-semibold font-outfit">
                        Yılmaz Sigorta
                    </div>
                    <nav className="nav-links flex gap-10 font-medium text-sm">
                        <a
                            href="/"
                            className="link"
                        >
                            Ürünlerimiz
                        </a>
                        <a
                            href="/"
                            className="link"
                        >
                            Kampanya
                        </a>
                        <a
                            href="/"
                            className="link"
                        >
                            Poliçe İşlemleri
                        </a>
                        <a
                            href="/"
                            className="link"
                        >
                            Bilgi İşlemleri
                        </a>
                    </nav>
                    <Button className="">Giriş Yap</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
