const NavbarFilterPlatform = ({
  setPlatformState,
  platformName,
  platformState,
}) => {
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setPlatformState((prevState) => ({
      ...prevState,
      platformsTerm: { ...prevState.platformsTerm, [name]: checked },
    }));
  };

  return (
    <li>
      <input
        type="checkbox"
        name={platformName}
        id={platformName}
        className="cursor-pointer"
        checked={platformState}
        onChange={handleChange}
      />
      <label htmlFor={platformName} className="cursor-pointer">
        {platformName}
      </label>
    </li>
  );
};

export default NavbarFilterPlatform;
