import React from "react";
import { useState } from "react";

const Context = React.createContext()

const ContextProvider = (props) => {
   const [isToggle, setIsToggle] = useState(false) 

    const toggle = () => {
        setIsToggle(prevState => !prevState)
    }
    return (
        <Context.Provider value={{isToggle, toggle}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}