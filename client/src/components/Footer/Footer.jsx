import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiHorse } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className="footer bg-white pt-20">
            <div className="cont">
                <div>
                    <div className="footer-wrapper flex justify-between border-b pb-10 lg:px-0 px-4 flex-col lg:flex-row lg:items-start gap-10">
                        <div className="logo text-2xl font-bold font-outfit flex items-center gap-2">
                            <PiHorse fontSize={32} />
                            <span>Yılmaz Sigorta</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="font-semibold text-xl mb-4 font-outfit">
                                Ürünlerimiz
                            </span>
                            <div className="text-slate-500 flex flex-col gap-2">
                                <span className="footer-link">
                                    Kasko Sigortası
                                </span>
                                <span className="footer-link">
                                    Trafik Sigortası
                                </span>
                                <span className="footer-link">
                                    İMM Sigortası
                                </span>
                                <span className="footer-link">
                                    Konut Sigortası
                                </span>
                                <span className="footer-link">DASK</span>
                                <span className="footer-link">
                                    Evim Güvende Sigortası
                                </span>
                                <span className="footer-link">
                                    Evcil Hayvan Sigortası
                                </span>
                                <span className="footer-link">
                                    Seyahat Sağlık Sigortası
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-xl mb-4 font-outfit">
                                Hizmetlerimiz
                            </span>
                            <div className="text-slate-500 flex flex-col gap-2">
                                <span className="footer-link">
                                    Günlük, Haftalık ve Aylık Kasko
                                </span>
                                <span className="footer-link">
                                    Doğum Sigortası Fiyatları
                                </span>
                                <span className="footer-link">
                                    Hamileyken Doğum Sigortası
                                </span>
                                <span className="footer-link">
                                    IMM Sigortası Nedir
                                </span>
                                <span className="footer-link">
                                    Sağlık Sigortası Karşılaştırma
                                </span>
                                <span className="footer-link">
                                    SBM Teklif Al
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <span className="font-semibold text-xl mb-4 font-outfit">
                                Hakkımızda
                            </span>
                            <div className="text-slate-500 flex flex-col gap-2">
                                <span className="footer-link">Biz Kimiz?</span>
                                <span className="footer-link">İletişim</span>
                                <span className="footer-link">
                                    Kullanıcı Sözleşmesi
                                </span>
                                <span className="footer-link">
                                    Çerez Tercihleri
                                </span>
                                <span className="footer-link">
                                    Kişisel Verilerin Korunması
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <span className="font-semibold text-xl font-outfit">
                                Bize ulaşın.
                            </span>
                            <div className="text-slate-500 flex gap-2">
                                <span className="p-2 border rounded-md hover:border-slate-400 transition-colors cursor-pointer">
                                    <FaFacebook />
                                </span>
                                <span className="p-2 border rounded-md hover:border-slate-400 transition-colors cursor-pointer">
                                    <FaInstagram />
                                </span>
                                <span className="p-2 border rounded-md hover:border-slate-400 transition-colors cursor-pointer">
                                    <FaTwitter />
                                </span>
                            </div>
                            <p className="tel text-sm text-slate-500 font-medium">
                                (212) 222-2222
                            </p>
                            <p className="tel text-sm text-slate-500 font-medium">
                                sigorta@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="py-4 text-slate-400 text-sm flex gap-6">
                        <span className="">© All Rights Reserved</span>|
                        <span>Privacy Policy</span>
                        <span>Terms</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
