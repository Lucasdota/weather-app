import { FaDroplet } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { useSelector } from "react-redux";

const Conditions = () => {
	const citySearchData = useSelector((state) => state.weather.citySearchData);	

  return (
    <div
      aria-label="weather conditions"
      className="text-white flex justify-between w-full"
    >
      {/* humidity */}
      <div aria-label="humidity condition" className="flex gap-1">
        <FaDroplet className="w-5 h-5" />
        <div className="flex flex-col leading-4">
          <span className="font-semibold">
            {citySearchData ? citySearchData.data.main.humidity + " %" : "-/-"}
          </span>
          <span className="text-sm">humidity</span>
        </div>
      </div>

      {/* wind */}
      <div aria-label="humidity condition" className="flex gap-1">
        <FaWind className="w-5 h-5" />
        <div className="flex flex-col leading-4">
          <span className="font-semibold">
            {citySearchData ? citySearchData.data.wind.speed + " km/h" : "-/-"}
          </span>
          <span className="text-sm">wind speed</span>
        </div>
      </div>
    </div>
  );
};

export default Conditions;




