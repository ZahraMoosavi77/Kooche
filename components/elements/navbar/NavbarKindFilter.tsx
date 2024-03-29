import { ChangeEvent, FC, ReactElement, useCallback } from "react";

const NavbarKindFilter: FC<NavbarKindFilterProps> = ({
  updateFilters,
  filters,
}): ReactElement => {
  const { isForExchangeFilter, isForSellFilter } = filters;

  const handleKindFilterChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const { name, checked } = e.target;
      updateFilters(name, checked);
    },
    [updateFilters]
  );

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
            className="cursor-pointer w-4 h-4 filter-checkbox appearance-none border checked:border-0 border-gray-600 rounded-[3px]"
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
            className="cursor-pointer w-4 h-4 filter-checkbox appearance-none border checked:border-0 border-gray-600 rounded-[3px]"
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
