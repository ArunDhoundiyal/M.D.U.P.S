import { createContext, useState } from "react";

export const CreateLanguageContext = createContext();

export const LanguageContextProvider = ({children}) => {
    const [languageId, setLanguageId] = useState('ENGLISH');
    return(
        <CreateLanguageContext.Provider value={{languageId, setLanguageId}} >
            {children}
        </CreateLanguageContext.Provider>
    )

}