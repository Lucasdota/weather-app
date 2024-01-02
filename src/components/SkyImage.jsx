import CloudyDay from '/sky-images/cloudy-day.png';
import RainyDay from '/sky-images/rainy-day.png';
import { useSelector } from "react-redux";

const SkyImage = () => {
	const citySearchData = useSelector((state) => state.weather.citySearchData);
	const skyCondition = citySearchData ? citySearchData.data.weather[0].main : undefined; 	

	return (
    <div aria-label="sky condition images" className="w-fit h-fit">
      {skyCondition ? (
        <img
          src={skyCondition === "Clouds" ? CloudyDay : RainyDay}
          alt="cloudy day image"
          className="w-28 h-28 drop-shadow"
        />
      ) : citySearchData === undefined ? (
        <div className="h-28 flex items-center justify-center">
          <p className="text-white font-bold text-xl">Not Found</p>
        </div>
      ) : (
        <div aria-label="temp separator" className="w-28 h-28" />
      )}
    </div>
  );
}

export default SkyImage