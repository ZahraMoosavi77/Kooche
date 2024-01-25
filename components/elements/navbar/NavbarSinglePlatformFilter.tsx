import { ChangeEvent, FC } from "react";

const NavbarSinglePlatformFilter:FC<NavbarSinglePlatformFilterProps> = ({
  setPlatformState,
  platformName,
  platformState,
}) => {
  const handlePlatformChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setPlatformState(name, checked);
  };

  return (
    <li className="cursor-pointer flex items-center gap-1.5 mb-1">
      <input
        type="checkbox"
        name={platformName}
        id={platformName}
        className="cursor-pointer w-4 h-4 filter-checkbox appearance-none border checked:border-0 border-gray-600 rounded-[3px]"
        checked={platformState}
        onChange={handlePlatformChange}
      />
      <label
        htmlFor={platformName}
        className="cursor-pointer font-peyda-regular text-gray-800 text-scales-small"
      >
        {platformName}
      </label>
    </li>
  );
};

export default NavbarSinglePlatformFilter;
