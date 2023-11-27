const NavbarFilterPlatform = ({
  setPlatformState,
  platformName,
  platformState,
}) => {
  const handlePlatformChange = (e) => {
    const { name, checked } = e.target;
    setPlatformState((prevState) => ({
      ...prevState,
      platforms: { ...prevState.platforms, [name]: checked },
    }));
  };

  return (
    <li className="cursor-pointer flex items-center gap-1.5 mb-1">
      <input
        type="checkbox"
        name={platformName}
        id={platformName}
        className="cursor-pointer w-4 h-4"
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

export default NavbarFilterPlatform;
