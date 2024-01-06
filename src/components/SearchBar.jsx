import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { getCityData } from "../redux/weatherSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  //initial render
	dispatch(getCityData({ city: "São Paulo" }));

  function onSubmit(e) {
		const searchInput = document.getElementById("searchInput");
    e.preventDefault();
    dispatch(getCityData({ city: searchInput?.value }));
		searchInput.value = "";
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full gap-2">
      <input
				required
				id="searchInput"
        type="search"
        aria-label="type the name of a city to get its weather conditions"
        placeholder="Search by city name"
        className="rounded-2xl p-1 indent-2.5 text-[0.9rem] outline-none tracking-tighter"
      />
      <button
        type="submit"
        className="rounded-full bg-white w-8 h-8 flex items-center justify-center outline-none"
      >
        <CiSearch />
      </button>
    </form>
  );
};

export default SearchBar;
