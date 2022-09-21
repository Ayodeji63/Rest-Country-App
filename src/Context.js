import { stepContentClasses } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";

const Context = React.createContext()

const ContextProvider = (props) => {
   const [theme, setTheme] = useState("dark")
   const [input, setInput] = useState('')
   const [content, setContent] = useState([])
   const [region, setRegion] = useState('')
    const [info, setInfo] = useState([])
   const [statement, setStatement] = useState("Loading...") 


   const handleChange = (e) => {
    setInput(e.target.value)
   }
   
   useEffect(() => {
     fetch(`https://restcountries.com/v3.1/all`)
     .then(res => res.json())
     .then(data => setContent(data))
    .catch(err => setStatement("404 error, Country Not Found"))
   }, [])

    function getInputYear(e) {
        e.preventDefault()
        
        fetch(`https://restcountries.com/v3.1/name/${input}`)
        .then(res => res.json())
        .then(data => setContent(data))
    }  
    
    function handleRegion (e) {
        e.preventDefault()
        // setRegion(e.target.value)
        const value = e.target.value
        fetch(`https://restcountries.com/v3.1/region/${value}`)
        .then(res => res.json())
        .then(data => setContent(data))
    }
   

    const toggle = () => {
        setTheme(prevState => prevState === "dark" ? "light" : "dark")
    }

    const getInfo = (name) => {
     const newElement =  content.find(element => element.name.common === name )
     setInfo(newElement)
    } 
    return (
        <Context.Provider value={{theme,toggle, input, handleChange,content, getInputYear,handleRegion, setRegion, getInfo, info, statement}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

