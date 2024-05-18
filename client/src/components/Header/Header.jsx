import React, { useState, useEffect } from "react";
import Button from "../../utils/Button/Button";
import { VscThreeBars } from "react-icons/vsc";
import { PiHorse } from "react-icons/pi";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="header py-3 select-none">
            <div className="cont">
                <div className="header-content flex justify-between items-center">
                    <div className="logo text-xl font-semibold font-outfit flex items-center gap-2">
                        <PiHorse fontSize={32} />{" "}
                        <span className="hidden lg:block">Yılmaz Sigorta</span>
                    </div>
                    <div
                        className="block lg:hidden"
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <VscThreeBars fontSize={24} />
                    </div>
                    <nav
                        className={`nav-links ${
                            showMenu ? "!flex" : ""
                        } hidden lg:flex absolute lg:static flex-col items-center bg-[#fff] lg:bg-[#f9f9f9] p-4 lg:p-0 lg:flex-row top-[68px] left-0 w-full lg:w-auto z-30 gap-4 lg:gap-10 font-medium text-sm`}
                    >
                        <a href="/" className="link">
                            Ürünlerimiz
                        </a>
                        <a href="/" className="link">
                            Kampanya
                        </a>
                        <a href="/" className="link">
                            Poliçe İşlemleri
                        </a>
                        <a href="/" className="link">
                            Bilgi İşlemleri
                        </a>
                    </nav>
                    <Button externalClass="resp-btn">Giriş Yap</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
