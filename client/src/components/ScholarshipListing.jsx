/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"
import ScholarshipCard from "./ScholarshipCard"
import { assets, ScholarshipAcademic, ScholarshipCategories, ScholarshipFields } from "../assets/assets"

const ScholarshipListing = () => {

    const {isSearched,searchFilter,setSearchFilter,scholarships}=useContext(AppContext)

    const [showFilter,setShowFilter]=useState(false)

    const [currentPage, setCurrentPage]=useState(1)

    const [selectedCategories,setSelectedCategories]=useState([])
    const [selectedFields,setSelectedFields]=useState([])

    const [filteredScholarships,setFilteredScholarships]=useState(scholarships)

    const handleCategoryChange=(category)=>{
        setSelectedCategories(
            prev=>prev.includes(category)?prev.filter(c=>c!==category):[...prev,category]
        )
    }

    const handleFieldChange=(field)=>{
        setSelectedFields(
            prev=>prev.includes(field)?prev.filter(c=>c!==field):[...prev,field]
        )
    }

    

  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
        {/* {Sidebar} */}
        <div className="w-full lg:w-1/4 bg-white px-4">
            {/* Search Filter from Hero Component */}
            {
                isSearched && (searchFilter.title!=="" || searchFilter.field!=="")&&(
                    <>
                    <h3 className="font-medium text-lg mb-4">Current Search</h3>
                    <div className="mb-4 text-gray-600">
                        {searchFilter.title && (
                            <span className="inline-flex items-center gap-2.5 border bg-emerald-50 border-emerald-400 px-4 py-1.5 rounded">
                                {searchFilter.title}
                                <img onClick={e=>setSearchFilter(prev=>({...prev,title:""}))} className="h-4 cursor-pointer" src={assets.cross_icon}/>
                            </span>
                        )}
                        {searchFilter.field && (
                            <span className="ml-2 inline-flex items-center bg-red-50 gap-2.5 border border-red-200 px-4 py-1.5 rounded">
                                {searchFilter.field}
                                <img onClick={e=>setSearchFilter(prev=>({...prev,field:""}))} className="h-4 cursor-pointer" src={assets.cross_icon}/>
                            </span>
                        )}
                    </div>
                    </>
                )
            }

            <button onClick={e=>setShowFilter(prev=>!prev)} className="px-6 py-1.5 rounded border border-gray-400 lg:hidden">
                {showFilter?"Close":"Filters"}
            </button>

            {/* Category Filter */}
            <div className={showFilter?"":"max-lg:hidden"}>
                <h4 className="font-medium text-lg py-4">Search by Categories</h4>
                <ul className="space-y-4 text-gray-600">
                    {
                        ScholarshipCategories.map((category,index)=>(
                            <li className="flex gap-3 items-center" key={index}>
                                <input 
                                className="scale-125" 
                                type="checkbox" 
                                onChange={()=>handleCategoryChange(category)}
                                checked={selectedCategories.includes(category)}
                                />
                                {category}
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* Field Filter */}
            <div className={showFilter?"":"max-lg:hidden"}>
                <h4 className="font-medium text-lg py-4 pt-14">Search by Fields</h4>
                <ul className="space-y-4 text-gray-600">
                    {
                        ScholarshipFields.map((category,index)=>(
                            <li className="flex gap-3 items-center" key={index}>
                                <input className="scale-125" type="checkbox" name="" id=""
                                onChange={()=>handleFieldChange(category)}
                                checked={selectedFields.includes(category)}
                                />
                                {category}
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* Academic Performance-Based Filter */}
            <div className={showFilter?"":"max-lg:hidden"}>
                <h4 className="font-medium text-lg py-4 pt-14">Search by Academic Performance</h4>
                <ul className="space-y-4 text-gray-600">
                    {
                        ScholarshipAcademic.map((category,index)=>(
                            <li className="flex gap-3 items-center" key={index}>
                                <input className="scale-125" type="checkbox" name="" id=""/>
                                {category}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>

        {/* Scholarship Listing */}
        <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4 ">
            <h3 className="font-medium text-3xl py-2" id="scholarship-list">Latest Scholarships</h3>
            <p className="mb-8">A Golden opportunity awaits you!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {scholarships.slice((currentPage-1)*6,currentPage*6).map((scholarship,index)=>(
                    <ScholarshipCard key={index} scholarship={scholarship}/>
                ))}
            </div>


            {/* Pagination */}
            {scholarships.length>0 && (
                <div className="flex items-center justify-center space-x-2 mt-10">
                    <a href="#scholarship-list">
                        <img onClick={()=>setCurrentPage(Math.max(currentPage-1),1)} src={assets.left_arrow} className="h-4"/>
                    </a>
                    {Array.from({length:Math.ceil(scholarships.length/6)}).map((_,index)=>(
                        // eslint-disable-next-line react/jsx-key
                        <a href="#scholarship-list">
                            <button onClick={()=>setCurrentPage(index+1)} className={`cursor-pointer w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage===index+1?'bg-emerald-100 text-green-500':'text-gray-500'}`}>{index+1}</button>
                        </a>
                    ))}
                    <a href="#scholarship-list">
                        <img onClick={()=>setCurrentPage(Math.min(currentPage+1),Math.ceil(scholarships.length/6))} src={assets.right_arrow} className="h-4"/>
                    </a>
                </div>
            )}
    
        </section>
    </div>
  )
}

export default ScholarshipListing