import { createContext, useEffect, useState } from "react";
import { ScholarshipData } from "../assets/assets";

export const AppContext= createContext()

export const AppContextProvider=(props)=>{

    const [searchFilter , setSearchFilter]= useState({
        title:'',
        Field:''
    })

    const [isSearched,setIsSearched]=useState(false)


    const [scholarships, setScholarships]=useState([])


    //function to fetch scholarships
    const fetchScholarships=async()=>{
        setScholarships(ScholarshipData)
    }

    useEffect(()=>{
        fetchScholarships()
    },[])

    const value = {
        searchFilter,setSearchFilter,
        isSearched,setIsSearched,
        scholarships,setScholarships
        
    }


    return (<AppContext.Provider value={value}>
        {props.children}
        </AppContext.Provider>)
}