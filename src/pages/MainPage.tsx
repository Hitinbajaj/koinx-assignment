import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import PageHolder from "../components/PageHolder";
import Navbar from "../components/Navbar";
import PromoCard from "../components/PromoCard";
import ToggleSections from "../components/ToggleSections";
import Performance from "../components/Performance";
import Sentiments from "../components/Sentiments";
import About from "../components/About";
import Team from "../components/Team";
import TrendingCoins from "../components/TrendingCoins";
import Tokenomics from "../components/Tokennomics";
import Suggestions from "../components/Suggestions";
import TradingView from "../components/TradingView";

interface MainPageProps {
    id?: string;
}

const MainPage: React.FC<MainPageProps> = ({ id = 'btc' }) => {
    let currentPage: string;
    let currency: string;
    const location = useLocation();

    // Set currentPage and currency based on id
    switch (id) {
        case 'btc':
            currentPage = 'Bitcoin';
            currency = 'bitcoin';
            break;
        case 'eth':
            currentPage = 'Ethereum';
            currency = 'ethereum';
            break;
        case 'opul':
            currentPage = 'Opulous';
            currency = 'opulous';
            break;
        default:
            currentPage = 'Bitcoin';
            currency = 'bitcoin';
            break;
    }

    const currencySymbols: { [key: string]: string } = {
        "bitcoin": "CRYPTO:BTCUSD",
        "ethereum": "CRYPTO:ETHUSD",
        "opulous": "KUCOIN:OPULUSDT"
    };

    const [symbol, setSymbol] = useState<string>("CRYPTO:BTCUSD");
    useEffect(() => {
        setSymbol(currencySymbols[currency]);
    }, [location.pathname]);

    const [key, setKey] = useState<number>(0);

    useEffect(() => {
        // Increment key when symbol changes
        setKey(prevKey => prevKey + 1);
    }, [symbol]);

    return (
        <div className="h-full w-screen bg-slate-200/40 overflow-hidden">
            <Navbar />
            <PageHolder currentPage={currentPage} />

            <div className="w-full lg:flex overflow-hidden">
                <div className="lg:w-8/12 lg:ml-14 mx-4">
                    <Dashboard currency={currency} />
                    <div className="lg:h-[420px] h-[200px]">
                        <TradingView key={key} symbol={symbol} />
                    </div>
                    <ToggleSections />
                    <Performance />
                    <Sentiments />
                    <About />
                    <Tokenomics />
                    <Team />
                </div>
                <div className="lg:w-4/12 sm:w-[screen] lg:mr-14 mx-4">
                    <PromoCard />
                    <TrendingCoins />
                </div>
            </div>
            <Suggestions />
        </div>
    );
};

export default MainPage;
