import { useSelector } from "react-redux";

const Temperature = () => {
	const citySearchData = useSelector((state) => state.weather.citySearchData);
	const getTemp = citySearchData ? citySearchData.data.main.temp.toString() : undefined;
	const fixedTemp = getTemp ? getTemp.charAt(0)+getTemp.charAt(1)+"º" : "-/-";

  return (
    <div
      aria-label="searched city's temperature"
      className="flex flex-col items-center gap-2 text-white font-semibold mb-8"
    >
      <span
        aria-label="searched city's temperature"
        className="text-5xl drop-shadow"
      >
        {fixedTemp}
      </span>
      <span className="text-2xl drop-shadow">{citySearchData ? citySearchData.data.name : "-/-"}</span>
    </div>
  );
};

export default Temperature;
