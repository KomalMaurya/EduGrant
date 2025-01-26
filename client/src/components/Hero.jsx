import { assets } from "../assets/assets"

const Hero = () => {
  return (
    <div className="container 2xl:px-20 mx-auto mt-10 my-10">
        <div className="bg-gradient-to-r from-emerald-400 to-emerald-950 text-white py-16 text-center  mx-2 rounded-xl ">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">Over 1,000+ Scholarships to apply</h2>
            <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">Unlock your future with EduGrant : Discover verified scholarships tailored just for you, all in one secure and easy-to-use platform!</p>
            <div className="flex items-center justify-between bg-white text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto rounded">
                <div className="flex items-center ">
                    <img src={assets.search} className="h-4 sm:h-5 opacity-50"/>
                    <input type="text" placeholder="Search for Scholarships" className="text-black bg-white max-sm:text-xs p-2 rounded outline-none w-full"/>
                </div>
                <div className="flex items-center">
                    <img src={assets.people} className="h-6 sm:h-6 opacity-75"/>
                    <input type="text" placeholder="Field" className="text-black bg-white max-sm:text-xs p-2 rounded outline-none w-full"/>
                </div>
                <button className="bg-emerald-400 px-6 py-2 rounded text-white m-1">Search</button>
            </div>
        </div>

        <div className="flex border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md">
            <div className=" flex justify-center items-center gap-10 lg:gap-16 flex-wrap"> 
                <p>Trusted by</p>
                <img src={assets.google} alt="" className="h-6"/>
                <img src={assets.microsoft} alt="" className="h-6"/>
                <img src={assets.adobe} alt="" className="h-6"/>
                <img src={assets.amazon} alt="" className="h-6"/>
                <img src={assets.loreal} alt="" className="h-8"/>
                <img src={assets.mahindra} alt="" className="h-8"/>
                <img src={assets.technip} alt="" className="h-8"/>
            </div>
        </div>
    </div>
  )
}

export default Hero