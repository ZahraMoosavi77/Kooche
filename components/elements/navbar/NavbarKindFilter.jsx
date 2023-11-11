import { useCallback } from "react";

const NavbarKindFilter = ({ setFilters, filters }) => {
  const { isForExchangeFilter, isForSellFilter } = filters;

  const handleKindFilterChange = useCallback((e) => {
    const { name, checked } = e.target;
    setFilters((prevState) => {
      return { ...prevState, [name]: checked };
    });
  }, []);

  return (
    <div className="border-b border-gray-300">
      <p className="text-gray-900 font-peyda-bold leading-leading-1">
        نوع فروش
      </p>
      <div className="mt-2 mb-3">
        <div className="cursor-pointer flex items-center gap-1.5 mb-1">
          <input
            type="checkbox"
            name="isForSellFilter"
            id="isForSellFilter"
            checked={isForSellFilter}
            onChange={handleKindFilterChange}
            className="cursor-pointer w-4 h-4"
          />
          <label
            htmlFor="isForSellFilter"
            className="cursor-pointer font-peyda-regular text-gray-800 text-scales-small"
          >
            فروش
          </label>
        </div>
        <div className="flex items-center gap-1.5">
          <input
            type="checkbox"
            name="isForExchangeFilter"
            id="isForExchangeFilter"
            checked={isForExchangeFilter}
            onChange={handleKindFilterChange}
            className="cursor-pointer w-4 h-4"
          />
          <label
            htmlFor="isForExchangeFilter"
            className="cursor-pointer font-peyda-regular text-gray-800 text-scales-small"
          >
            تبادل
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavbarKindFilter;
