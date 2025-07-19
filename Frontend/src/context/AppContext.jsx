import { createContext } from "react";
import { serviceProviders } from "../assets/assets";

export const AppContext = createContext()
const AppContextProvider = (props)=>{

    const currencySymbol = "₹";

const value = {
    serviceProviders,
    currencySymbol
}
    return(
        <AppContext.Provider value={value}>
            {props.children}
            </AppContext.Provider>
    )
}

export default AppContextProvider;