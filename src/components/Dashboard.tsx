import { useState, useEffect } from "react";
import axios from "axios";
import btcimg from "../assets/btc.png";
import ethimg from "../assets/eth.png";
import opulimg from "../assets/opul.png";

interface CryptoData {
  inr: number;
  inr_24h_change: number;
  usd: number;
  usd_24h_change: number;
}
interface DashboardProps {
    currency?: string;
}
const currencyImages: { [key: string]: string } = {
  bitcoin: btcimg,
  ethereum: ethimg,
  opulous: opulimg
};

const currencyRanks: { [key: string]: number } = {
  bitcoin: 1,
  ethereum: 2,
  opulous: 3
};
const Crypto : React.FC<DashboardProps> = ({currency = 'bitcoin'})=> {
  const [cryptoData, setCryptoData] = useState<CryptoData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${currency}&vs_currencies=inr%2Cusd&include_24hr_change=true`
        );
        console.log(response.data);
        setCryptoData(response.data[currency]);
      } catch (error) { /* empty */ }
    };
    setCryptoData(null);
    fetchData();

    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, [currency]);
  const currencyImage = currencyImages[currency];
  return (
    <div className="bg-white h-max rounded-lg my-5 p-6">
      <div className="flex items-center">
        <div>
          <img src={currencyImage} className="w-9" alt="Bitcoin" />
        </div>
        <div className="text-2xl font-semibold text-[#0B1426] pl-2">
          {currency.toLocaleUpperCase()}
        </div>
        <div className="text-sm text-[#5D667B] pl-2">BTC</div>
        <div className="bg-[#808A9D] px-3 py-2 text-white rounded-lg ml-7">
          Rank #{currencyRanks[currency]}
        </div>
      </div>
      <div className="mt-8 flex">
        <div>
          <div className="text-3xl font-semibold text-[#0B1426]">
            {(cryptoData && `$${cryptoData.usd}`) || `Loading...`}
          </div>
          <div className="text-lg font-medium text-[#0B1426]">
            {(cryptoData && `₹ ${cryptoData.inr}`) || `Loading...`}
          </div>
        </div>
        <div
          className={`flex items-center justify-center rounded-lg p-2 h-10 ml-10 ${
            cryptoData && cryptoData.inr_24h_change < 0
              ? "bg-red-300/20"
              : "bg-green-300/20"
          }`}
        >
          <svg
            viewBox="0 0 100 100"
            className={`w-4 fill-current ${
              cryptoData && cryptoData.inr_24h_change < 0
                ? "text-red-600 rotate-180"
                : "text-green-600"
            }`}
          >
            <polygon points="0,100 50,0 100,100" />
          </svg>
          <span
            className={`ml-2 text-sm font-bold ${
              cryptoData && cryptoData.inr_24h_change < 0
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {(cryptoData &&
              `${Math.abs(cryptoData.inr_24h_change).toFixed(2)}%`) ||
              `Loading...`}
          </span>
        </div>

        <div className="text-sm text-[#768396] ml-2 mt-2">(24H)</div>
      </div>
      <hr className="my-4" />
      <div className="lg:flex mb-4 justify-between">
        <div className="ls:text-lg text-sm font-semibold text-[#0B1426]">
          {currency.toLocaleUpperCase()} Price Chart (USD)
        </div>
        <div className="flex lg:space-x-5 space-x-3 mr-4 text-sm text-[#5D667B] font-medium text-center items-center">
          <div>1H</div>
          <div>24H</div>
          <div className="text-[#0141CF] bg-[#E2ECFE] rounded-3xl px-3 py-1">
            7D
          </div>
          <div>1M</div>
          <div>3M</div>
          <div>6M</div>
          <div>1Y</div>
          <div>All</div>
        </div>
      </div>
    </div>
  );
}

export default Crypto;