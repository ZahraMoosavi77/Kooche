import React, { useState, createContext } from "react";
import { useContext } from "react";

export const InsertData = createContext({
    name: 'zahra', platformId: '', cityId: '', unitedId: '', locId: '', statusId: '', price: '', moreInfo: '', data: ''
    , exchange: '', preferedExchange: '',
});
export const InputValue = createContext("");
export const InputValueAction = createContext(() => { });

export const NewPageProvider = () => {
    const insertData = {
        name: '', platformId: '', cityId: '', unitedId: '', locId, statusId: '', price: '', moreInfo: '', data: ''
        , exchange: '', preferedExchange: '',
    };
    const [inputValue, setInputValue] = useState("");
    return (
        <InputValue.Provider value={inputValue}>
            <InputValueAction.Provider value={setInputValue}>
                <InsertData.Provider value={insertData}>
                    {children}
                </InsertData.Provider>
            </InputValueAction.Provider>
        </InputValue.Provider>
        
    );
};