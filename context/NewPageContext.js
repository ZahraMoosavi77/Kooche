"use client";

import { createContext, useState, useContext } from "react";

export const ValuesContext = createContext({
  name: "",
  sellername: "",
  phonenumber: "",
  price: "",
  preferedExchange: "",
  moreInfo: "",
  platformId: "",
  cityId: "",
  provinceId: "",
  exchange: "",
});
export const ActionsValuesContext = createContext();
export const ValidNameContext = createContext();
export const ActionValidNameContext = createContext();
export const ValidPhoneNumberContext = createContext();
export const ActionValidPhoneNumberContext = createContext();
export const ValidSellerNameContext = createContext();
export const ActionValidSellerNameContext = createContext();
export const ValidPriceContext = createContext();
export const ActionValidPriceContext = createContext();
export const ValidProvinceContext = createContext();
export const ActionValidProvinceContext = createContext();
export const ValidCityContext = createContext();
export const ActionValidCityContext = createContext();
export const CitiesContext = createContext();
export const ActionCitiesContext = createContext();
export const ExchangeContext = createContext();
export const ActionExchangeContext = createContext();
export const SaleContext = createContext();
export const ActionSaleContext = createContext();
export const OnChangeFunctionContext = createContext();

export const NewPageProvider = ({ children }) => {
  const [isSale, setIsSale] = useState(false);
  const [isExchange, setIsExchange] = useState(false);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [isValidSellerName, setIsValidSellerName] = useState(true);
  const [isValidPrice, setIsValidPrice] = useState(true);
  const [isValidProvince, setIsValidProvince] = useState(true);
  const [isValidCity, setIsValidCity] = useState(true);
  const [cities, setCities] = useState([]);
  const [values, setValues] = useState({
    name: "",
    sellername: "",
    phonenumber: "",
    price: "",
    preferedExchange: "",
    moreInfo: "",
    platformId: "",
    cityId: "",
    provinceId: "",
    exchange: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (e.target.name === "name") setIsValidName(true);
    if (e.target.name === "sellername") setIsValidSellerName(true);
    if (e.target.name === "price") setIsValidPrice(true);
    if (e.target.name === "phonenumber") {
      const result = REGex.test(e.target.value);
      if (!result && !values.phonenumber.trim()) setIsValidPhoneNumber(false);
      if (result && values.phonenumber.trim()) setIsValidPhoneNumber(true);
    }
  };
  //   {children}
  return (
    <CitiesContext.Provider value={cities}>
      <ActionCitiesContext.Provider value={setCities}>
        <ValuesContext.Provider value={values}>
          <ActionsValuesContext.Provider value={setValues}>
            <ValidSellerNameContext value={isValidSellerName}>
              <ActionValidSellerNameContext value={setIsValidSellerName}>
                {children}
              </ActionValidSellerNameContext>
            </ValidSellerNameContext>
          </ActionsValuesContext.Provider>
        </ValuesContext.Provider>
      </ActionCitiesContext.Provider>
    </CitiesContext.Provider>
  );
};
// export const UseValueContext = () => useContext(ValuesContext);
{
  /* <ActionExchangeContext value={setIsExchange}>
            <ExchangeContext.Provider value={isExchange}> */
}
{
  {
    /* </ExchangeContext.Provider>
</ActionExchangeContext> */
  }
  /* <SaleContext value={isSale}>
                  <ActionSaleContext value={setIsSale}>
                    <ValidNameContext value={isValidName}>
                      <ActionValidNameContext value={setIsValidName}>
                        <ValidPhoneNumberContext value={isValidPhoneNumber}>
                          <ActionValidPhoneNumberContext value={setIsValidPhoneNumber}>
                            <ValidSellerNameContext value={isValidSellerName}>
                              <ActionValidSellerNameContext value={setIsValidSellerName}> */
}
{
  /* <ValidPriceContext value={isValidPrice}>
                                  <ActionValidPriceContext value={setIsValidPrice}>
                                    <ValidCityContext value={isValidCity}>
                                      <ActionValidCityContext value={setIsValidCity}>
                                        <ValidProvinceContext value={isValidProvince}>
                                          <ActionValidProvinceContext value={setIsValidProvince}>  */
}
{
  /* <OnChangeFunctionContext value={onChange}> */
}
{
  /* </OnChangeFunctionContext> */
}
{
  /* </ActionValidProvinceContext>
                                        </ValidProvinceContext>
                                      </ActionValidCityContext>
                                    </ValidCityContext>
                                  </ActionValidPriceContext>
                                </ValidPriceContext> */
}
{
  /* </ActionValidSellerNameContext>
                            </ValidSellerNameContext>
                          </ActionValidPhoneNumberContext>
                        </ValidPhoneNumberContext>
                      </ActionValidNameContext>
                    </ValidNameContext>
                  </ActionSaleContext>
                </SaleContext> */
}
